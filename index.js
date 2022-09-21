// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README




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