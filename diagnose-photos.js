const fs = require('fs');
const path = require('path');

const folder = 'F:\\photo a.r';

console.log('🔍 Photo Diagnosis: ' + folder);
console.log('========================================');

if (!fs.existsSync(folder)) {
  console.log('❌ Folder nahi mila!');
  process.exit(1);
}

const allItems = fs.readdirSync(folder);
console.log('📁 Total items: ' + allItems.length);

const photoExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
const files = [];
let zeroByte = 0;
let realPhoto = 0;
let fakeExt = 0;

allItems.forEach((file) => {
  const fullPath = path.join(folder, file);
  try {
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) return;
    
    const ext = path.extname(file).toLowerCase();
    const size = stat.size;
    
    // Read first 4 bytes to check file signature (magic bytes)
    const buffer = fs.readFileSync(fullPath, { end: 3 });
    const sig = buffer.toString('hex').toUpperCase();
    
    let actualType = 'Unknown';
    let isRealImage = false;
    
    // Check file signatures
    if (sig.startsWith('FFD8FF')) { actualType = 'JPEG/JPG'; isRealImage = true; }
    else if (sig.startsWith('89504E47')) { actualType = 'PNG'; isRealImage = true; }
    else if (sig.startsWith('47494638')) { actualType = 'GIF'; isRealImage = true; }
    else if (sig.startsWith('424D')) { actualType = 'BMP'; isRealImage = true; }
    else if (sig.startsWith('52494646')) { actualType = 'WEBP (maybe)'; isRealImage = true; }
    else if (size === 0) { actualType = 'EMPTY (0 bytes)'; }
    
    if (size === 0) zeroByte++;
    if (photoExts.includes(ext) && isRealImage) realPhoto++;
    if (photoExts.includes(ext) && !isRealImage && size > 0) fakeExt++;
    
    files.push({ name: file, ext, size, actualType, isRealImage });
  } catch (e) {
    files.push({ name: file, ext: '?', size: 0, actualType: 'Error', isRealImage: false });
  }
});

console.log('\n📊 SUMMARY:');
console.log('  Real photos (valid image): ' + realPhoto);
console.log('  Fake extension (says .jpg but not image): ' + fakeExt);
console.log('  Zero byte files (empty/corrupt): ' + zeroByte);
console.log('  Other files: ' + (files.length - realPhoto - fakeExt - zeroByte));
console.log('========================================');

console.log('\n⚠️ SAMASYA WALI FILES (pehli 20):');
let shown = 0;
files.forEach((f) => {
  if (shown >= 20) return;
  if (!f.isRealImage || f.size === 0) {
    const sizeKB = (f.size / 1024).toFixed(2);
    console.log('  • ' + f.name + ' | ' + f.ext + ' | ' + sizeKB + ' KB | Real: ' + f.actualType);
    shown++;
  }
});

console.log('\n✅ THEEK FILES (pehli 10):');
let shownOk = 0;
files.forEach((f) => {
  if (shownOk >= 10) return;
  if (f.isRealImage) {
    const sizeKB = (f.size / 1024).toFixed(2);
    console.log('  • ' + f.name + ' | ' + f.ext + ' | ' + sizeKB + ' KB | ' + f.actualType);
    shownOk++;
  }
});

console.log('\nDone!');
