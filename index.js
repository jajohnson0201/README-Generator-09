// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    { type: 'input',
    message: 'What is your user name?',
    name: 'name',
},
new inquirer.Separator(),
    {type: 'input',
    message: 'What is your Project Title?',
    name: 'title',
},
new inquirer.Separator(),
    {type: 'input',
    message: 'Enter a description for your motivation for the project.',
    name: 'description1',
},
new inquirer.Separator(),
{type: 'input',
    message: 'Explain why you made the project.',
    name: 'description2',
},
new inquirer.Separator(),
{type: 'input',
    message: 'Explain what problem your project solves.',
    name: 'description3',
},
new inquirer.Separator(),
{type: 'input',
    message: 'Explain what you have learned with this project.',
    name: 'description4',
},
new inquirer.Separator(),
{type: 'input',
    message: 'Describe the installation process.',
    name: 'installation',
},
new inquirer.Separator(),
{type: 'input',
    message: 'Enter things used to make the project(links, images...).',
    name: 'usage',
},
new inquirer.Separator(),
{type: 'input',
    message: 'Enter Contributers to the project.',
    name: 'contribution',
},
new inquirer.Separator(),
{type: 'input',
    message: 'Explain what testing has been done.',
    name: 'tests',
},
new inquirer.Separator(),
{type: 'list',
    message: 'Select a license.',
    choices: ["MIT", "ISC", "Unlicense"],
    default: "MIT",
    name: 'license',
},
new inquirer.Separator(),
{type: 'input',
    message: 'Enter your github link.',
    name: 'github',
},
new inquirer.Separator(),
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
    writeToFile("sampleReadMe.MD",data );
})}
// Function call to initialize app
init();
