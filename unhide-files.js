const { execSync } = require('child_process');

const folder = 'F:\\photo a.r';

console.log('🔓 Hidden files unlock kar raha hoon: ' + folder);
console.log('----------------------------------------');

try {
  // attrib -h -s = hidden aur system attribute hatata hai
  // /S = sub-folders mein bhi, /D = folders bhi include karega
  const command = `attrib -h -s "${folder}\\*.*" /S /D`;
  execSync(command, { stdio: 'inherit' });

  console.log('----------------------------------------');
  console.log('✅ Sabhi hidden files unlock ho gayi hain!');
  console.log('Ab Folder kholkar photos dekhein.');
} catch (err) {
  console.error('❌ Error: ' + err.message);
}
