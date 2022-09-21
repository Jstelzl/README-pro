const fs = require('fs');
const inquirer = require('inquirer');
const prompt = require('../index.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let badge = '';
//   if(license === 'MIT') {
//     badge = '![GitHub license](https://ing.shields.io/github/license/Naereen/StrapDown.js.svg)'
//   } else if (license === 'Apache 2.0') {
//     badge = '![License](https://ing.shields.io/badge/License-Apache%202.0-blue-svg'
//   } else if (license === 'GPL v3.0') {
//     badge = '![License: GPL v3](https://ing.shields.io/badge/License-GPLv3-blue.svg'
//   } else {
//     badge = ''
//   }
//   return badge;
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
//console.log(prompt.license);
function generateMarkdown(data) {
  return `
  # ${data.title}

  # License:
  ${data.license === 
    "Apache 2.0" ? "Apache 2.0" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}


  ## Table of Contents:
  ### - [License](#license)
  ### - [Installation](#installation)
  ### - [Usage](#usage)
  ### - [Contribution Guidlines](#contribution)
  ### - [Tests](#tests)
  ### - [Questions](#questions)

  # Description:
  ### ${data.description}

  ## Installation Process:
  ### Must install for this app:
  ### ${data.installation}

  ## Usage Info:
  ### ${data.usage}

  ## Contribution Guidlines:
  ### ${data.contributors}

  ## Test Instructions:
  ### Run the following commands in your terminal to test this app:
  ### ${data.test}

  ## Questions: 
  ### If you have questions contact me:
  ### GitHub: https://github.com/${data.ghub}
  ### or
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
