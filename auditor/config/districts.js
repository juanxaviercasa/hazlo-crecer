/**
 * Lima Districts and Search Configuration
 * Covers all strategic districts of Lima Metropolitana & Callao
 */

export const LIMA_DISTRICTS = [
  // Tier 1: Centros Empresariales y Alta Demanda B2B
  { id: 'miraflores', name: 'Miraflores', tier: 1, type: 'B2B/Premium', lat: -12.1211, lng: -77.0298 },
  { id: 'san-isidro', name: 'San Isidro', tier: 1, type: 'Corporativo/Financiero', lat: -12.0977, lng: -77.0346 },
  { id: 'surco', name: 'Santiago de Surco', tier: 1, type: 'Residencial/Comercial', lat: -12.1456, lng: -76.9912 },
  { id: 'san-borja', name: 'San Borja', tier: 1, type: 'Corporativo/Comercial', lat: -12.0945, lng: -77.0012 },
  { id: 'la-molina', name: 'La Molina', tier: 1, type: 'Residencial/Empresarial', lat: -12.0833, lng: -76.9333 },
  { id: 'magdalena', name: 'Magdalena del Mar', tier: 1, type: 'Comercial/B2B', lat: -12.0933, lng: -77.0700 },
  { id: 'jesus-maria', name: 'Jesús María', tier: 1, type: 'Comercial/B2B', lat: -12.0747, lng: -77.0483 },
  { id: 'lince', name: 'Lince', tier: 1, type: 'Comercial/Pymes', lat: -12.0833, lng: -77.0333 },
  { id: 'san-miguel', name: 'San Miguel', tier: 1, type: 'Comercial/Pymes', lat: -12.0772, lng: -77.0878 },
  { id: 'pueblo-libre', name: 'Pueblo Libre', tier: 1, type: 'Comercial/Pymes', lat: -12.0733, lng: -77.0633 },
  { id: 'barranco', name: 'Barranco', tier: 1, type: 'Creativo/Boutique', lat: -12.1467, lng: -77.0200 },
  { id: 'lima-cercado', name: 'Cercado de Lima', tier: 1, type: 'Institucional/Centro', lat: -12.0464, lng: -77.0428 },

  // Tier 2: Hubs Comerciales de Alto Volumen & Lima Norte/Sur/Este
  { id: 'los-olivos', name: 'Los Olivos', tier: 2, type: 'Hub Lima Norte/Pymes', lat: -11.9922, lng: -77.0711 },
  { id: 'smp', name: 'San Martín de Porres', tier: 2, type: 'Lima Norte/Pymes', lat: -11.9961, lng: -77.0983 },
  { id: 'independencia', name: 'Independencia', tier: 2, type: 'Comercial Lima Norte', lat: -11.9900, lng: -77.0500 },
  { id: 'comas', name: 'Comas', tier: 2, type: 'Lima Norte', lat: -11.9333, lng: -77.0500 },
  { id: 'ate', name: 'Ate Vitarte', tier: 2, type: 'Industrial/Pymes Lima Este', lat: -12.0256, lng: -76.9189 },
  { id: 'santa-anita', name: 'Santa Anita', tier: 2, type: 'Comercial Lima Este', lat: -12.0433, lng: -76.9717 },
  { id: 'sjl', name: 'San Juan de Lurigancho', tier: 2, type: 'Volumen Pymes Lima Este', lat: -11.9833, lng: -77.0000 },
  { id: 'la-victoria', name: 'La Victoria', tier: 2, type: 'Comercial Gamarra/Pymes', lat: -12.0667, lng: -77.0167 },
  { id: 'surquillo', name: 'Surquillo', tier: 2, type: 'Comercial/Moderno', lat: -12.1122, lng: -77.0189 },
  { id: 'chorrillos', name: 'Chorrillos', tier: 2, type: 'Residencial/Comercial', lat: -12.1667, lng: -77.0167 },
  { id: 'sjm', name: 'San Juan de Miraflores', tier: 2, type: 'Lima Sur Pymes', lat: -12.1583, lng: -76.9667 },
  { id: 'ves', name: 'Villa El Salvador', tier: 2, type: 'Industrial/Pymes Lima Sur', lat: -12.2000, lng: -76.9333 },

  // Metro Callao
  { id: 'callao-bellavista', name: 'Bellavista / Callao', tier: 2, type: 'Puerto/Comercial', lat: -12.0600, lng: -77.1200 }
];

export const GENERAL_SEARCH_TERMS = [
  'agencia diseño web lima',
  'diseño paginas web lima peru',
  'mejor agencia diseño web lima',
  'desarrollo web lima ranking empresas',
  'agencia marketing y diseño web lima',
  'creacion de paginas web lima precios'
];

export const DISTRICT_QUERY_TEMPLATES = [
  'agencia diseño web {district} lima',
  'diseño paginas web {district}',
  'desarrollo web {district} lima peru'
];
