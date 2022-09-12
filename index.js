// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const { writeFile } = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Readme Generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            //do stuff with the answers
            console.log(answers);
            //after all answers are collected, write to file!
            //TODO - build a string that uses our answers to generate some markdown, and write that to 
            //our file as the 'data' parameter. (replace the test values below)
            writeToFile('test.txt', 'here is some data');
        });
}
// Function call to initialize app
init();