
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const prompts = [

    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Enter a description!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can a user install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide steps for installation');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide a use/purpose for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How can others contribute to your poject?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log('Must provide steps on how to test this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ghub',
        message: 'What is your GitHub user name?',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please enter your github user name for others can contact you with questions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter you email address!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'IBM', 'Perl'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license!');
                return false;
            }
        }
    },
];
// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    }); 
};

// TODO: Create a function to initialize app
// Function call to initialize app
function init() {
    inquirer.prompt(prompts)
        .then(function(data) {
            console.log(data);
            var fileContent = generateMarkdown(data);
            writeToFile(fileContent)
        });
}

init();

// exports
module.exports = prompts;