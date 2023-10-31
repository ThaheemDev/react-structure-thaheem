#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import shell from 'shelljs'


const projectList = {
    React: "React",
    "Next.js": "Next.js",
    Nest: "Nest.js",
    "Express.js": "Express.js",
};

const types = {
    ts: "TypeScript",
    js: "JavaScript",
}

const projectOptions = [
    {
        type: "list",
        name: "projectOption",
        message: chalk.green("Select a project:"),
        choices: Object.values(projectList),
    },
    {
        type: "list",
        name: "type",
        message: chalk.green("Select a Type:"),
        choices: Object.values(types),
    },
    // {
    //     type: "confirm",
    //     name: "isNew",
    //     message: chalk.green("creating a new project? (y/n)"),
    // },
    // {
    //     type: "input",
    //     name: "projectName",
    //     message: "Enter your Project Name:",
    //     when: (answers) => answers.isNew,
    // },
];

async function runStatFunction() {
    try {
        const { projectOption, type } = await inquirer.prompt(
            projectOptions
        );

        if (projectOption !== projectList["Next.js"]) {
            console.log(
                chalk.red(
                    "Sorry we are not allowed to create a structure for this project"
                )
            );
            process.exit(1);
        }
        if (type === types.js) {
            console.log(chalk.red('Sorry we are working on javascript file structure.. please stay with us'));
            process.exit(1);
        }
        shell.exec('next-str  --ts')


    } catch (error) {
        console.log(chalk.red(error));
    }
}

figlet("Thaheem Str.", function (_, data) {

    console.log(data);
    runStatFunction();
});
