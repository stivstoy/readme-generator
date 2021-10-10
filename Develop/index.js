// required files
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// prompt title
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
    // prompt description
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
    // prompt installation
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter your installation instructions!');
          return false;
        }
      }
    },
   
    // prompt license
    {
      type: 'list',
      name: 'license',
      message: 'Select license type (Required) ',
      choices: ['MIT', 'ISC', 'GNU GPLv3', 'None']
    },
  // prompt questions
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

     // prompt credits
     {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles. (Required) ',
      validate: creditsInput => {
        if (creditsInput) {
          return true;
        } else {
          console.log('List yourself and any collaborators');
          return false;
        }
      }
    },

  ])
};
// Construct README file
promptReadme()
  .then(readmeData => {
    console.log(readmeData);
    const pageReadme = generatePage(readmeData);
    fs.writeFile('./README.md', pageReadme, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out README.md in this directory to see it!');
    });
  })



