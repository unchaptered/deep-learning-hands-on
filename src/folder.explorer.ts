import fs from 'fs';
import path from 'path';

const EXCEPT_SET = new Set([
    '.git',                 // For Repositories
    '.github',              // For Repositories
    '.gitignore',           // For Repositories
    '.DS_Store',            // For Repositories
    '.ipynb_checkpoints',   // For *_**_...
    'cfg',                  // For 8_Yolo_V3
    'model',                // For 8_Yolo_V3
    'videos',               // For 8_Yolo_V3
    'demo.py',              // For 8_Yolo_V3
    'yad2k.py',             // For 8_Yolo_V3
    'LICENSE',              // For 8_Yolo_V3
    'dist',                 // For Repositories
    'images',               // For Repositories
    'node_modules',         // For Repositories
    'package-lock.json',    // For Repositories
    'package.json',         // For Repositories
    'README.md',            // For Repositories
    'src',                  // For Repositories
    'tsconfig.json'         // For Repositories
]);

export function getFolderList(fileName: string): string[] {
    
    const temporalPath = path.join(__dirname, '/../python', fileName);
    
    return fs.readdirSync(temporalPath).filter(v => !EXCEPT_SET.has(v));

}