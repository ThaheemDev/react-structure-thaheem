#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk'
import { generateFileStructure } from './react.js';
import figlet from 'figlet';


const projectList = ["React", "Next.js", "Nest", "Node", "Express.js"]

const projectOptions = [
    {
        type: 'list',
        name: 'projectOption',
        message: chalk.green('Select a project:'),
        choices: projectList,
    },
    {
        type: 'list',
        name: 'type',
        message: chalk.green('Select a Type:'),
        choices: ["typeScript", "javascript"],
    },
    {
        type: 'confirm',
        name: 'isNew',
        message: chalk.green('creating a new project? (y/n)')
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter your Project Name:',
        when: (answers) => answers.isNew
    },
];

async function createStructure() {

    try {


        const { projectOption, isNew, projectName } = await inquirer.prompt(projectOptions);
        console.log(isNew, projectName)
        if (projectOption !== projectList[0]) {
            console.log(chalk.red("Sorry we are not allowed to create a structure for this project"))
            return false;
        }

        console.log(chalk.green("Please Wait..."));
        generateFileStructure(isNew ? projectName : false)

    } catch (error) {
        console.log(error)
    }
}

figlet('Thaheem Str.', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    createStructure()
});
