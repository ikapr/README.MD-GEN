// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  // Add more conditions for other licenses if needed
  return '';
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  }
  // Add more conditions for other licenses if needed
  return '';
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the terms of the [${license} License](${renderLicenseLink(license)}). ${renderLicenseBadge(license)}`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact ${data.email}.
GitHub: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
