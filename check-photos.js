const fs = require('fs');
const path = require('path');

const folder = 'F:\\photo a.r';

console.log('🔍 Photo folder check: ' + folder);
console.log('========================================');

if (!fs.existsSync(folder)) {
  console.log('❌ Folder nahi mila! Photos delete ho sakti hain ya drive disconnect hai.');
  process.exit(1);
}

const allItems = fs.readdirSync(folder);
console.log('📁 Total items in folder: ' + allItems.length);

let photoCount = 0;
let zeroByte = 0;
let shortcutCount = 0;
let folderCount = 0;
let otherCount = 0;

const photoExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff'];

allItems.forEach((file) => {
  const fullPath = path.join(folder, file);
  try {
    const stat = fs.statSync(fullPath);
    const ext = path.extname(file).toLowerCase();
    
    if (stat.isDirectory()) {
      folderCount++;
    } else if (photoExts.includes(ext)) {
      photoCount++;
      if (stat.size === 0) zeroByte++;
    } else if (ext === '.lnk') {
      shortcutCount++;
    } else {
      otherCount++;
    }
  } catch (e) {
    // skip error files
  }
});

console.log('📸 Photo files (jpg/png/etc): ' + photoCount);
console.log('⚠️  Zero byte photos (kharab/delete): ' + zeroByte);
console.log('📂 Sub-folders: ' + folderCount);
console.log('🔗 Shortcut files: ' + shortcutCount);
console.log('📄 Other files: ' + otherCount);
console.log('========================================');

if (photoCount === 0) {
  console.log('❌ Koi photo file nahi mili! Photos delete ho sakti hain.');
} else if (zeroByte > 0) {
  console.log('⚠️ ' + zeroByte + ' photos 0 KB ki hain - wo kharab ya delete ho gayi ho sakti hain.');
} else {
  console.log('✅ Photos safe hain! Total ' + photoCount + ' photo files milin.');
}

// First 10 photos ki list
console.log('\n📋 Pehle 10 photos:');
let count = 0;
allItems.forEach((file) => {
  if (count >= 10) return;
  const ext = path.extname(file).toLowerCase();
  if (photoExts.includes(ext)) {
    const fullPath = path.join(folder, file);
    try {
      const stat = fs.statSync(fullPath);
      const sizeKB = (stat.size / 1024).toFixed(2);
      console.log('  • ' + file + ' (' + sizeKB + ' KB)');
      count++;
    } catch (e) {}
  }
});

console.log('\nDone!');
