/**
 * Site Auditor Engine
 * Inspects agency homepages to extract copy, value proposition, CTAs, tech stack, and contact channels
 */

import { extractDomain } from './districtExtractor.js';

/**
 * Clean HTML text
 */
function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extract WhatsApp links and phone numbers
 */
function extractContacts(html) {
  const contacts = {
    whatsapp: [],
    emails: [],
    phones: []
  };

  // WhatsApp links (wa.me, api.whatsapp.com)
  const waRegex = /(?:https?:\/\/)?(?:api\.whatsapp\.com\/send\?phone=|wa\.me\/)([0-9]{8,15})/gi;
  let match;
  while ((match = waRegex.exec(html)) !== null) {
    if (!contacts.whatsapp.includes(match[1])) {
      contacts.whatsapp.push(match[1]);
    }
  }

  // Emails
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi;
  while ((match = emailRegex.exec(html)) !== null) {
    const email = match[1].toLowerCase();
    // Exclude asset filenames or common false positives
    if (!email.endsWith('.png') && !email.endsWith('.jpg') && !email.endsWith('.webp') && !email.includes('example.com') && !email.includes('sentry.io')) {
      if (!contacts.emails.includes(email) && contacts.emails.length < 5) {
        contacts.emails.push(email);
      }
    }
  }

  // Peruvian phones (+51 9xx xxx xxx or 01 xxx xxxx)
  const phoneRegex = /(?:\+?51\s*)?(?:9\d{8}|01\s*\d{7}|\(01\)\s*\d{7})/g;
  while ((match = phoneRegex.exec(html)) !== null) {
    const p = match[0].replace(/\s+/g, '');
    if (!contacts.phones.includes(p) && contacts.phones.length < 5) {
      contacts.phones.push(p);
    }
  }

  return contacts;
}

/**
 * Detect tech stack from HTML fingerprints
 */
function detectTechStack(html) {
  const stack = [];

  const lower = html.toLowerCase();
  if (lower.includes('wp-content') || lower.includes('wordpress')) stack.push('WordPress');
  if (lower.includes('elementor')) stack.push('Elementor');
  if (lower.includes('woocommerce')) stack.push('WooCommerce');
  if (lower.includes('shopify') || lower.includes('cdn.shopify.com')) stack.push('Shopify');
  if (lower.includes('webflow')) stack.push('Webflow');
  if (lower.includes('next.js') || lower.includes('__next')) stack.push('Next.js');
  if (lower.includes('react') || lower.includes('react-dom')) stack.push('React');
  if (lower.includes('vue') || lower.includes('nuxt')) stack.push('Vue/Nuxt');
  if (lower.includes('tailwind')) stack.push('Tailwind CSS');
  if (lower.includes('bootstrap')) stack.push('Bootstrap');
  if (lower.includes('hubspot')) stack.push('HubSpot');
  if (lower.includes('google-analytics') || lower.includes('gtag') || lower.includes('googletagmanager')) stack.push('Google Analytics/GTM');
  if (lower.includes('facebook-jssdk') || lower.includes('fbevents.js')) stack.push('Meta Pixel');

  if (stack.length === 0) stack.push('Custom HTML/JS');
  return stack;
}

/**
 * Detect core services offered
 */
function detectServices(text) {
  const lower = text.toLowerCase();
  const services = [];

  if (lower.includes('diseño web') || lower.includes('diseño de páginas web') || lower.includes('desarrollo web')) {
    services.push('Diseño y Desarrollo Web');
  }
  if (lower.includes('tienda virtual') || lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('tiendas online')) {
    services.push('E-commerce / Tiendas Virtuales');
  }
  if (lower.includes('posicionamiento seo') || lower.includes('seo en lima') || lower.includes('auditoría seo') || lower.includes('motores de búsqueda')) {
    services.push('Posicionamiento SEO');
  }
  if (lower.includes('google ads') || lower.includes('meta ads') || lower.includes('publicidad digital') || lower.includes('campañas pfx')) {
    services.push('Publicidad Digital (PPC/Ads)');
  }
  if (lower.includes('inteligencia artificial') || lower.includes('chatbots') || lower.includes('automatización') || lower.includes('agentes de ia')) {
    services.push('Inteligencia Artificial / Automatizaciones');
  }
  if (lower.includes('branding') || lower.includes('diseño gráfico') || lower.includes('identidad visual') || lower.includes('logotipos')) {
    services.push('Branding e Identidad Visual');
  }
  if (lower.includes('hosting') || lower.includes('dominio') || lower.includes('correos corporativos')) {
    services.push('Hosting y Dominio Corporativo');
  }

  return services;
}

/**
 * Detect mentioned Lima districts in the page text
 */
function detectDistricts(text) {
  const lower = text.toLowerCase();
  const districts = [
    'miraflores', 'san isidro', 'surco', 'santiago de surco', 'san borja', 'la molina',
    'magdalena', 'jesús maría', 'jesus maria', 'lince', 'san miguel', 'pueblo libre',
    'barranco', 'los olivos', 'san martín de porres', 'comas', 'ate', 'santa anita',
    'san juan de lurigancho', 'chorrillos', 'surquillo', 'callao', 'bellavista'
  ];

  const found = [];
  for (const d of districts) {
    if (lower.includes(d)) {
      found.push(d.charAt(0).toUpperCase() + d.slice(1));
    }
  }
  return [...new Set(found)];
}

/**
 * Audits a single agency website
 */
export async function auditAgencySite(url) {
  const domain = extractDomain(url);
  const targetUrl = url.startsWith('http') ? url : `https://${url}`;

  const result = {
    url: targetUrl,
    domain,
    status: 'pending',
    statusCode: null,
    ssl: targetUrl.startsWith('https'),
    title: '',
    metaDescription: '',
    h1: [],
    h2: [],
    heroCopy: '',
    ctas: [],
    pricingHints: [],
    contacts: { whatsapp: [], emails: [], phones: [] },
    techStack: [],
    services: [],
    districtsMentioned: []
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(targetUrl, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-PE,es;q=0.9,en;q=0.8'
      }
    });
    clearTimeout(timeout);

    result.statusCode = res.status;
    if (!res.ok) {
      result.status = `HTTP ${res.status}`;
      return result;
    }

    const html = await res.text();
    result.status = 'success';

    // Title
    const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
    result.title = titleMatch ? cleanText(titleMatch[1]) : '';

    // Meta Description
    const metaDescMatch = /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i.exec(html)
      || /<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i.exec(html);
    result.metaDescription = metaDescMatch ? cleanText(metaDescMatch[1]) : '';

    // H1 tags
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
    let match;
    while ((match = h1Regex.exec(html)) !== null && result.h1.length < 5) {
      const text = cleanText(match[1]);
      if (text.length > 3) result.h1.push(text);
    }

    // H2 tags
    const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
    while ((match = h2Regex.exec(html)) !== null && result.h2.length < 8) {
      const text = cleanText(match[1]);
      if (text.length > 5) result.h2.push(text);
    }

    // Call to Action buttons / links
    const ctaRegex = /<(?:button|a)[^>]*class=["'][^"']*(?:btn|button|cta|action|cotiz|contact)[^"']*["'][^>]*>([\s\S]*?)<\/(?:button|a)>/gi;
    while ((match = ctaRegex.exec(html)) !== null && result.ctas.length < 8) {
      const text = cleanText(match[1]);
      if (text.length > 2 && text.length < 50 && !result.ctas.includes(text)) {
        result.ctas.push(text);
      }
    }

    // Hero paragraph
    const pRegex = /<p[^>]*class=["'][^"']*(?:hero|lead|intro|subhead|banner)[^"']*["'][^>]*>([\s\S]*?)<\/p>/gi;
    const heroMatch = pRegex.exec(html);
    if (heroMatch) {
      result.heroCopy = cleanText(heroMatch[1]);
    } else if (result.metaDescription) {
      result.heroCopy = result.metaDescription;
    }

    // Pricing mentions
    const priceRegex = /(?:S\/\.?\s*|USD\s*\$?\s*|\$\s*)\d{2,5}(?:\.\d{2})?/g;
    while ((match = priceRegex.exec(html)) !== null && result.pricingHints.length < 5) {
      if (!result.pricingHints.includes(match[0])) {
        result.pricingHints.push(match[0]);
      }
    }

    // Contacts, Tech Stack, Services, Districts
    result.contacts = extractContacts(html);
    result.techStack = detectTechStack(html);
    result.services = detectServices(html);
    result.districtsMentioned = detectDistricts(html);

  } catch (err) {
    result.status = `Error: ${err.message}`;
  }

  return result;
}
