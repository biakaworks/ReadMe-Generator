console.log("Yo Test Test");

// Const that RMG needs to have in the beginning
const fs = require("fs");
const inquirer = require("inquirer");
// const readmeGenerator = require('./utils/readmeGenerator')

// The questions that ReadMe_Generator will ask the user
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your Project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please give a short description of your Project",
    },
    {
        type: "list",
        name: "license",
        message: "Please pick the correct license for your Project",
        choices: [
            "Apache",
            "Boost",
            "Creative Commons",
            "GNU",
            "Mozilla",
            "Unlicense",
        ]
      },
    {
      type: "input",
      name: "installation",
      message: "How do you install your Project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe how to use your Project.",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributers in this Project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a Test in this Project?",
      },
    {
      type: "input",
      name: "email",
      message: "Please enter your contact email:",
    },
    {
      type: "input",
      name: "gitHub",
      message: "Please add your GitHub username:",
    },
  ])
  .then((data) => {
    const filename = `${data.projectTitle
      .toLowerCase()
      .split(" ")
      .join("")}.md`;
    let template = `<h1 align="center">${data.projectTitle}</h1>

## Description
📖 ${data.description}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Contributing](#contributing)
- [Tests](#tests)
- [Email](#email)
- [GitHub](#gitHub)
- [Questions](#questions)

## Installation
💿 ${data.installation}

## Contributing
🤝 ${data.contributors}

## Tests
🔬 ${data.tests}

## Email me if you have any questions about ${data.projectTitle} at:
📧 ${data.email}

## Github
🐙+🐱 Connect on GitHub at: [${data.gitHub}](https://github.com/${data.gitHub})

`;

    fs.writeFile(filename, template, (err) =>
      err
        ? console.log(err)
        : console.log("Success! Thanks for using ReadMe_Generator")
    );
  });
