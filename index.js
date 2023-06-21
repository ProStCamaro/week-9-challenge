// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the testing instructions for your project?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Do you have any additional questions or need further assistance?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'What is the license for your project?'
  }
  // Add more questions as needed
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md created successfully!')
  );
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the content for the README file using the answers object
      const readmeContent = generateReadmeContent(answers);

      // Write the content to README.md
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Generate the content for the README file using the provided answers
function generateReadmeContent(answers) {
  // Customize this function to generate the desired README content
  return `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}

## License
${answers.license}

`;
}

// Function call to initialize app
init();