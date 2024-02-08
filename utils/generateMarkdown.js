// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'GNUGPLv3') {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  } else if (license === 'ApacheLicense2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'ISC') {
    return 'https://choosealicense.com/licenses/isc/';
  } else {
    return '';
  }
} 

// TODO: Create a function to generate license section of README based on chosen license
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `## License\nThis project is licensed under the [MIT License](${renderLicenseLink(license)}).`;
  } else if (license === 'GNUGPLv3') {
    return `## License\nThis project is licensed under the [GNU GPLv3 License](${renderLicenseLink(license)}).`;
  } else if (license === 'ApacheLicense2.0') {
    return `## License\nThis project is licensed under the [Apache License 2.0](${renderLicenseLink(license)}).`;
  } else if (license === 'ISC') {
    return `## License\nThis project is licensed under the [ISC License](${renderLicenseLink(license)}).`;
  } else {
    return '';
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate license badge based on chosen license
  const licenseBadge = renderLicenseBadge(data.license);

  // Generate license link based on chosen license
  const licenseLink = renderLicenseLink(data.license);

  // Generate license section based on chosen license
  const licenseSection = renderLicenseSection(data.license);

  // Construct the README content with proper markdown syntax
  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](${licenseLink})
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

${licenseSection}

## Questions

For questions about this project, please contact [${data.github}](https://github.com/${data.github}) at ${data.email}.`;
}

module.exports = generateMarkdown;
