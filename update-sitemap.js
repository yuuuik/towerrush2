const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];
const xml = fs.readFileSync(file, 'utf8').replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(file, xml);
console.log(`sitemap.xml lastmod set to ${today}`);
