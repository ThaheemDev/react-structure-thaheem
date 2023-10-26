#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the folder name from the command line arguments
const args = process.argv.slice(2);
let folderName = args[0];

if (args.length !== 1 || folderName === '--help' || folderName === '-h') {
    console.log('Usage: react-structure <folder-name>');
    process.exit(1);
}

const generateFileStructure = () => {
    const rootDir = path.join(process.cwd(), folderName);

    if (!fs.existsSync(rootDir)) {
        fs.mkdirSync(rootDir);
    }

    // Create directories
    const directoriesToCreate = [
        path.join(rootDir, 'src'),
        path.join(rootDir, 'src', 'components'),
        path.join(rootDir, 'src', 'styles'),
        path.join(rootDir, 'public')
    ];

    directoriesToCreate.forEach((dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    });

    // Create files
    const filesToCreate = [
        { path: path.join(rootDir, 'src', 'index.js'), content: '' },
        { path: path.join(rootDir, 'public', 'index.html'), content: '<!DOCTYPE html><html><head><title>My App</title></head><body></body></html>' },
        { path: path.join(rootDir, 'public', 'favicon.ico'), content: '' }
    ];

    filesToCreate.forEach((file) => {
        if (!fs.existsSync(file.path)) {
            fs.writeFileSync(file.path, file.content);
        }
    });

    console.log(`File structure for '${folderName}' generated successfully.`);
};

generateFileStructure();
