const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://salmocentre.com';
const PUBLIC_DIR = path.join(__dirname, '../public');
const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/services', changefreq: 'monthly', priority: 0.8 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/testimonials', changefreq: 'weekly', priority: 0.7 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },
  { path: '/admission', changefreq: 'monthly', priority: 0.8 },
  { path: '/bookings', changefreq: 'weekly', priority: 0.9 },
  { path: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms-and-conditions', changefreq: 'yearly', priority: 0.3 },
];

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML content
const generateSitemap = () => {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  ROUTES.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';
  return sitemap;
};

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Write sitemap to file
const sitemap = generateSitemap();
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully at public/sitemap.xml'); 