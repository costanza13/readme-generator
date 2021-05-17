const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project title (required):',
    validate: titleInput => {
      if (!titleInput) {
        console.log('Project title cannot be omitted.');
        return false;
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description (required):',
    validate: descriptionInput => {
      if (!descriptionInput) {
        console.log('Please enter at least a brief description.');
        return false;
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage instructions:',
  },
  {
    type: 'confirm',
    name: 'confirmContributions',
    message: 'Are you seeking project contributors?',
    default: false
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines:',
    when: ({ confirmContributions }) => {
      return (confirmContributions);
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Tests:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['Apache', 'BSD', 'GPL', 'LGPL', 'MIT', 'MPL', 'CDDL', 'EPL', '<other>', '<none>']
  },
  {
    type: 'input',
    name: 'otherLicense',
    message: 'Enter a license:',
    when: ({ license }) => {
      return (license === '<other>');
    }
  },
  {
    type: 'confirm',
    name: 'confirmContact',
    message: 'Would you like to provide contact information?',
    default: true
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    when: ({ confirmContact }) => {
      return confirmContact;
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    when: ({ confirmContact }) => {
      return confirmContact;
    }
  },
  {
    type: 'confirm',
    name: 'confirmContents',
    message: 'Include a table of contents?',
    default: true
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data => {
    console.log(data);
  })
  .catch();
}

// Function call to initialize app
init();
