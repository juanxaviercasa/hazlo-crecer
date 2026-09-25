/**
 * District Extractor Engine
 * Scrapes and aggregates top-ranked web design agencies across Lima districts
 */

import { LIMA_DISTRICTS, GENERAL_SEARCH_TERMS, DISTRICT_QUERY_TEMPLATES } from '../config/districts.js';

// Noise domains to filter out (aggregators, social media, generic directories)
const EXCLUDED_DOMAINS = [
  'facebook.com', 'instagram.com', 'linkedin.com', 'youtube.com', 'twitter.com', 'x.com',
  'pinterest.com', 'wikipedia.org', 'tiktok.com', 'mercadolibre.com.pe', 'computrabajo.com.pe',
  'bumeran.com.pe', 'postulante.pe', 'tripadvisor.com', 'yelp.com', 'yellowpages.com',
  'paginasamarillas.com.pe', 'infobae.com', 'elcomercio.pe', 'larepublica.pe', 'rpp.pe'
];

/**
 * Extracts domain name from a URL
 */
export function extractDomain(rawUrl) {
  try {
    let url = rawUrl.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    const parsed = new URL(url);
    let hostname = parsed.hostname.toLowerCase();
    if (hostname.startsWith('www.')) {
      hostname = hostname.slice(4);
    }
    return hostname;
  } catch {
    return null;
  }
}

/**
 * Checks if a domain is a real agency rather than a generic platform
 */
export function isAgencyDomain(domain) {
  if (!domain) return false;
  return !EXCLUDED_DOMAINS.some(excluded => domain.includes(excluded));
}

/**
 * Queries DuckDuckGo HTML SERP for search results
 */
export async function scrapeSearchQuery(query, maxResults = 10) {
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  const results = [];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-PE,es;q=0.9,en;q=0.8'
      }
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return results;
    }

    const html = await res.text();

    // Regex parsing of DuckDuckGo HTML results
    const linkRegex = /<a class="result__url"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    const titleRegex = /<a class="result__snippet"[^>]*href="[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;

    // Alternative result link matching
    const resultBlockRegex = /<div class="result__body">([\s\S]*?)<\/div>/gi;
    let match;

    while ((match = resultBlockRegex.exec(html)) !== null && results.length < maxResults) {
      const block = match[1];
      const titleMatch = /<a class="result__a"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i.exec(block);
      const snippetMatch = /<a class="result__snippet"[^>]*>([\s\S]*?)<\/a>/i.exec(block);

      if (titleMatch) {
        let rawHref = titleMatch[1];
        // DDG uses /l/?kh=-1&uddg=... format
        if (rawHref.includes('uddg=')) {
          const parsed = new URL('https://duckduckgo.com' + rawHref);
          const uddg = parsed.searchParams.get('uddg');
          if (uddg) rawHref = uddg;
        }

        const domain = extractDomain(rawHref);
        if (domain && isAgencyDomain(domain)) {
          const title = titleMatch[2].replace(/<[^>]+>/g, '').trim();
          const snippet = snippetMatch ? snippetMatch[1].replace(/<[^>]+>/g, '').trim() : '';

          results.push({
            url: rawHref.startsWith('http') ? rawHref : `https://${domain}`,
            domain,
            title,
            snippet,
            query
          });
        }
      }
    }
  } catch (err) {
    // Graceful fallback if network is throttled
  }

  return results;
}

/**
 * Builds all search queries for Lima districts
 */
export function buildDistrictQueries(districts = LIMA_DISTRICTS) {
  const queries = [];

  // General queries
  for (const term of GENERAL_SEARCH_TERMS) {
    queries.push({ query: term, districtId: 'lima-metropolitana', districtName: 'Lima Metropolitana', tier: 1 });
  }

  // District specific queries
  for (const dist of districts) {
    for (const template of DISTRICT_QUERY_TEMPLATES) {
      const q = template.replace('{district}', dist.name);
      queries.push({ query: q, districtId: dist.id, districtName: dist.name, tier: dist.tier });
    }
  }

  return queries;
}
