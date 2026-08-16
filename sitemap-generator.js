const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');
const pkg = require('./package.json');

const hostname = pkg.config.site_url || 'http://localhost:3000';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/abhishek-digital-identity', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contacts', changefreq: 'monthly', priority: 0.7 },
  { url: '/performance-reports', changefreq: 'monthly', priority: 0.7 }
];

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe sitemap output into the file
sitemap.pipe(writeStream);

// Write each route into the sitemap
links.forEach(link => sitemap.write(link));

// End the stream
sitemap.end();

writeStream.on('finish', () => {
  console.log('✅ Sitemap successfully generated at public/sitemap.xml');
});
