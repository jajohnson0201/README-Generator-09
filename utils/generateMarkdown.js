// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/${license})`
  }else{return ""}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license){return `License: https://opensource.org/licenses/${license}`
}else{return ""}

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){ return `## License
 - ${license}
 - ${renderLicenseBadge(license)}
 - ${renderLicenseLink(license)}`
}else{return ""}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


return  `# ${data.title} 

${renderLicenseBadge(data.license)}

## Description
- ${data.description1}
- ${data.description2}
- ${data.description3}
- ${data.description4}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)


## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
- you can find me @
- ${data.email}
- ${data.github}
- for all questions
`;
}

module.exports = generateMarkdown;
