// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
        This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
i. [Installation](#installation)<br>
ii. [Usage](#usage)<br>
iii. [Contributions](#contributions)<br>
iv. [Tests](#tests)<br>
v. [Questions](#questions)<br>
vi. [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributions
${data.contribution}
## Tests
${data.tests}
## Questions
If you have any questions, please feel free to reach out to me at ${data.email}!<br>
You can also find me on GitHub at ${data.username}!
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

export default generateMarkdown;
