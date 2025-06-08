// scripts/fix-leading-zero.js
import fs from 'fs';
import path from 'path';

const distCssDir = './dist/assets';
const cssFiles = [];

function findCssFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            findCssFiles(fullPath); // 再帰
        } else if (file.endsWith('.css')) {
            cssFiles.push(fullPath);
        }
    }
}

findCssFiles(distCssDir);

if (cssFiles.length === 0) {
    console.warn('⚠ CSSファイルが見つかりませんでした');
} else {
    cssFiles.forEach((filePath) => {
        let content = fs.readFileSync(filePath, 'utf8');
        const updated = content.replace(/\b0+(\.\d+)([a-z%]*)\b/g, '$1$2');
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log(`✔ ${filePath} のゼロを削除しました`);
    });
}
