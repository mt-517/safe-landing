
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const articleDir = path.join(__dirname, 'articles');
const files = fs.readdirSync(articleDir).filter(f => f.endsWith('.html'));

const articles = files.map(file => {
  const html = fs.readFileSync(path.join(articleDir, file), 'utf8');
  const $ = cheerio.load(html);
  return {
    file,
    title: $('meta[name="title"]').attr('content') || $('title').text(),
    summary: $('meta[name="summary"]').attr('content') || '',
    category: $('meta[name="category"]').attr('content') || '',
    date: $('meta[name="date"]').attr('content') || '',
    image: $('img').first().attr('src') || ''
  };
}).sort((a,b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(path.join(articleDir, 'articles.json'), JSON.stringify(articles, null, 2));
console.log('articles.json updated');
