#!/usr/bin/env node

import shell from 'shelljs'
import chalk from 'chalk';
import fs from 'fs';

const isTs = process.argv.includes('--ts') ?? true;

const myApp = { name: 'react-structure-thaheem' }
const isExistSrc = fs.existsSync('src')
export const allCommands = [
    { cmd: "npm install --save react-redux", message: "react-redux for globally state manage" },
    { cmd: "npm install --save @reduxjs/toolkit", message: "redux toolkit" },
    { cmd: "npm install --save cookies-next", message: "Next Cookies" },
    { cmd: "npm install --save framer-motion", message: "framer-motion for animations" },
    { cmd: "npm install --save nextjs-progressbar", message: "nextjs-progressbar for next routing progress" },
    { cmd: "npm install --save react-hot-toast", message: "react-hot-toast for sweet and awesome alert" },
    { cmd: "npm install --save sass", message: "sass for styling" },
    { cmd: "npm install --save typescript", message: "latest typescript" },
    { cmd: "npm install --save axios", message: "axios for fetching api" },
]

console.log('--------------------------------------------')
console.log(chalk.blue('Creating folder structure!'))
console.log('--------------------------------------------')
console.log(chalk.blue('NOTE: We create a src directory if already exist then create a copy of src directory'))

// console.log(chalk.red('NOTE: We are adding a JSLINT file in to the root of your current terminal location!'))
/**
 * Copy folders
 */


chalk.green(shell.exec(isExistSrc ? 'mkdir src-copy' : 'mkdir src'))

chalk.green(shell.exec(`npm install ${myApp.name}`))
console.log(chalk.red('1/') + chalk.red('2') + chalk.green('Files installed successfully and copying into ' + isExistSrc ? ' src-copy' : 'src'))

shell.exec(`cp -R ./node_modules/${myApp.name}/str/${isTs ? "next-ts" : "next-js"}/src/* ${isExistSrc ? './src-copy' : './src'}`)
console.log(chalk.red('2/') + chalk.red('2') + chalk.green('folder structure Created successfully'))

// shell.exec(`cp ./node_modules/${myApp.name}/.eslintrc.js ./`)
// console.log(chalk.red('3/') + chalk.red('3') + chalk.green(' : Eslint file added to root'))

console.log('--------------------------------------------')
console.log(chalk.blue('Next Folder Structure Created!'))
console.log('--------------------------------------------')

console.log('--------------------------------------------')
console.log(chalk.blue('Installing dependencies are connected with Structure files.....'))
console.log('--------------------------------------------')

console.log(chalk.cyan('Please wait until installing dependencies....'))
allCommands.forEach(({ message, cmd }) => {
    console.log(chalk.cyan(`installing ${message} please wait...`))
    shell.exec(cmd)
})

console.log(chalk.cyan('All dependencies have been installed..'))

console.log('--------------------------------------------')
console.log(chalk.red('This module no longer has any purpose! why not remove it?'))
console.log(chalk.green(`npm remove ${myApp.name} --save`))
console.log('--------------------------------------------')