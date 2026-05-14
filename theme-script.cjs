const fs = require('fs');
const path = require('path');

const dir = './src';

const map = {
  'bg-white': 'bg-spa-dark',
  'text-spa-dark': 'text-white',
  'bg-cream-50': 'bg-spa-darker',
  'bg-cream-100': 'bg-white/5',
  'border-cream-200': 'border-white/10',
  'text-nude-600': 'text-nude-200',
  'text-nude-500': 'text-nude-300',
  'text-nude-400': 'text-white/60',
  'from-cream-50': 'from-spa-dark',
  'to-nude-100': 'to-spa-darker',
  'to-nude-50': 'to-spa-darker',
  'via-spa-light': 'via-spa-darker',
  'bg-spa-light': 'bg-spa-darker',
  'border-cream-100': 'border-white/5',
  'hover:bg-cream-50': 'hover:bg-white/5',
  'hover:bg-cream-100': 'hover:bg-white/10'
};

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      
      // We must replace longer strings first to avoid partial replacements
      // e.g. hover:bg-cream-100 before bg-cream-100
      const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length);
      
      for (const [key, value] of entries) {
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        newContent = newContent.replace(regex, value);
      }
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDir(dir);
console.log('Theme conversion complete!');
