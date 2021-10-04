// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

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
- Description
- Instalation
- Usage
- Credits
- license
- Testing
- [Questions](##Questions)

## Installation Instruction
${data.indatallation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Testing
${data.test}

## Please send questions about application to:
${data.questions}
`;
}

module.exports = generateMarkdown;

