const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function cleanFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;


    content = content.replace(/^[ \t]*\/\/.*(?:\r?\n|$)/gm, '');


    content = content.replace(/^[ \t]*\{\/\*[\s\S]*?\*\/\}[ \t]*(?:\r?\n|$)/gm, '');


    content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');


    content = content.replace(/(?:\r?\n){3,}/g, '\n\n');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Cleaned ${filePath}`);
    }
}

function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (/\.(tsx|ts|jsx|js)$/.test(file) && !file.endsWith('.d.ts')) {
            cleanFile(fullPath);
        }
    }
}

traverse(dir);
console.log('Cleanup complete!');
