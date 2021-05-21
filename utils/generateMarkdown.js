// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'LGPL':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'MPL':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'EPL':
      return '[![License: EPL 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, otherLicenseName) {
  switch (license) {
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD 3-Clause':
      return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'GPL v3':
      return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'LGPL v3':
      return '[LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
      break;
    case 'MPL 2.0':
      return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'EPL 1.0':
      return '[EPL 1.0](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'Unlicense':
      return '[Unlicense](http://unlicense.org/)';
      break;
    default:
      return '';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license, otherLicense) {
  let licenseStr = '';
  switch (license) {
    case '<none>': 
      // leave it as '';
      break;
    case '<other>':
      licenseStr = otherLicense;
      break;
    default:
      let badge = renderLicenseBadge(license);
      if (badge) {
        licenseStr = badge;
      }
      licenseStr += ' This software is made available under the ' + renderLicenseLink(license, '', '') + ' license.';
  }
  if (licenseStr) {
    return '## License' + "\n\n" + licenseStr;
  }

}

function renderCreditsSection(data) {
  let creditsStr = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].creditLink) {
      creditsStr += `* [${data[i].creditName}](${data[i].creditLink})`;
    } else {
      creditsStr += `* ${data[i].creditName}`;
    }
    if (data[i].creditComment) {
      creditsStr += ` - ${data[i].creditComment}`;
    }
    creditsStr += "\n";
  }

  if (creditsStr) {
    creditsStr = "## Credits\n\n" + creditsStr;
  }

  return creditsStr;
}

function renderTableOfContents(data) {
  let toc = '';
  if (data.confirmContents) {
    if (data.installation) {
      toc += "* [Installation](#installation)\n";
    }
    if (data.usage) {
      toc += "* [Usage](#usage)\n";
    }
    if (data.contributing) {
      toc += "* [Contributing](#contributing)\n";
    }
    if (data.license) {
      toc += "* [License](#license)\n";
    }
    if (data.tests) {
      toc += "* [Tests](#tests)\n";
    }
    if (data.credits) {
      toc += "* [Credits](#credits)\n";
    }
    if (data.confirmContact) {
      toc += "* [Questions](#questions)\n";
    }
    if (toc) {
      toc = "## Table of Contents\n" + toc;
    }
  }

  return toc;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

${ data.technologies ? `Built with: *${data.technologies}*\n\n` : ''}
${ data.appUrl ? `Check it out at: ${data.appUrl}\n\n` : ''}
${ renderTableOfContents(data) }
${ data.installation ? "## Installation\n\n" + `${data.installation}\n` : '' }
${ data.usage ? "## Usage\n\n" + `${data.usage}\n` : '' }
${ renderLicenseSection(data.license, data.otherLicense) }


${ data.contributing ? "## Contributing" + "\n\n" + `${data.contributing}\n\n` : '' }
${ data.tests ? "## Tests\n\n" + `${data.tests}\n\n` : '' }
${ data.credits ? renderCreditsSection(data.credits) : '' }
${ data.confirmContact ? "## Questions?\n\n" + `Contact ${data.name} (GitHub: [${data.github}](https://github.com/${data.github})) at: [${data.email}](mailto://${data.email})` : '' }
`;
}

module.exports = generateMarkdown;
