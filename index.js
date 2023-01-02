// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    
    {type: 'input',
    message: 'What is your Project Title?',
    name: 'title',
},
    {type: 'input',
    message: 'Enter a description for your motivation for the project.',
    name: 'description1',
},
{type: 'input',
    message: 'Explain why you made the project.',
    name: 'description2',
},
{type: 'input',
    message: 'Explain what problem your project solves.',
    name: 'description3',
},
{type: 'input',
    message: 'Explain what you have learned with this project.',
    name: 'description4',
},
{type: 'input',
    message: 'Describe the installation process.',
    name: 'installation',
},
{type: 'input',
    message: 'Enter things used to make the project(links, images...)',
    name: 'usage',
},
{type: 'input',
    message: 'Enter Contributers to the project.',
    name: 'contribution',
},
{type: 'input',
    message: 'Explain what testing has been done.',
    name: 'tests',
},
{type: 'list',
    message: 'Select a license.',
    choices: ["MIT", "ISC", "Unlicense"],
    default: "MIT",
    name: 'license',
},
{type: 'input',
    message: 'Enter your github link.',
    name: 'github',
},
{type: 'input',
    message: 'Enter your email.',
    name: 'email',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
console.log(data);
console.log(fileName);
const md = generateMarkdown(data);
fs.writeFile(fileName, md, (err) =>
      err ? console.log(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {
inquirer
.prompt(questions).then((data)=>{
    writeToFile("sampleREADME.md",data );
})}
// Function call to initialize app
init();
