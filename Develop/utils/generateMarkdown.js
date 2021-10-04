// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}
function license(data) {
    const type = data.license;
    console.log (type);
    let licenseLink = "";
    if  (type === "MIT" ) {
        licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    };
    if  (type === "ISC" ) {
        licenseLink = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    };
    if  (type === "GNU GPLv3" ) {
        licenseLink = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    };
    if  (type === "None" ) {
        licenseLink = 'This application has no license'
    };
    return licenseLink;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

## Description 
${data.description}

## Table of Contents
- [Title](#title)
- [Description](#Description)
- [Instalation](#Installation-Instructions)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Testing](#Testing)
- [Questions](#Please-send-questions-about-application-to)

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${license(data)}

## Testing
${data.test}

## Please send questions about application to
${data.questions}
`;
}

module.exports = generateMarkdown;

