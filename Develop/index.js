const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

  const promptReadme = readmeData => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter title (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter your description (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tableContents',
      message: 'Please enter table of contents (optional)',
      validate:tableInput => {
       if (tableInput) {
      return true;
        } else {
      console.log('You need to enter a table of contents!');
      return false;
       }
       }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation insstructions (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter your installation instructions!');
          return false;
        }
      }
    },
  
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Provide instructions and examples for use. Include screenshots as needed.');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles. (Required) ',
      validate: creditsInput => {
        if (creditsInput) {
          return true;
        } else {
          console.log('List your collaborators, if any, with links to their GitHub profiles.');
          return false;
        }
      }
    },


    {
      type: 'list',
      name: 'license',
      message: 'Select license type (Required) ',
      choices: ['MIT', 'Community', 'GNU GPLv3', 'None']
    },

    {
      type: 'input',
      name: 'test',
      message: 'Please enter your tests and examples of to run them.(Required) ',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('Please enter your tests and examples of how to run them.');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'questions',
      message: 'Please send questions to: (Required) ',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('Please enter questions contact information.');
          return false;
        }
      }
    },
 
  
  ])
};

promptReadme()
.then(readmeData => {
  console.log(readmeData);
  // will be uncommented in lesson 4
  const pageReadme = generatePage(readmeData);
  fs.writeFile('./README.md', pageReadme, err => {
   if (err) throw new Error(err);
  console.log('Page created! Check out README.md in this directory to see it!');
  });
})



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

// Function call to initialize app


