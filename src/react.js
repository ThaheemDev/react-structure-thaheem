import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

export const generateFileStructure = (projectName = false) => {
    const rootDir = projectName ? path.join(process.cwd(), projectName) : process.cwd();

    // check  if same directory exists
    if (projectName && fs.existsSync(rootDir)) {
        console.log(chalk.red('Same directory already exists'))
        return false;
    } else if (projectName) {
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

    console.log(chalk.green('File structure generated successfully.'));
};

