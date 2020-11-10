console.log("Yo Test Test")

// Const that RMG needs to have in the beginning
const fs = require('fs');
const inquirer = require('inquirer');
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
            name: "installation",
            message: "What is your ReadMe's Title?",
        },
    ])
    .then((data) => {
        const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;
        let template =`# ${data.projectTitle}
## Description

This project solves the security concern of weak passwords. Given that a user needs a new, secured password, they will be promted to determine certain character types required for the password and then a new random password will be generated.

![Image of Version](https://img.shields.io/badge/ReadMeGen-v1.0-green)

The new password implements greater security to sensitive data and saves time for users.

The criteria that the password is able to meet are: <br>

1) the password is between 8 - 128 characters long, AND <br>

2) the password must have at least one of the following character types: <br>
    *lowercase characters <br>
    *uppercasse characters <br>
    *special characters <br>
    *numeric characters <br>

## The final product
 https://timothy-wesley.github.io/password-generator/

<img src="example1.png" alt="picture of password generator"> <br>
<img src="example2.png" alt="picture of completed password"> <br>

        `
    
        fs.writeFile(filename, template, (err) =>
          err ? console.log(err) : console.log('Success! Thanks for using ReadMe_Generator')
        );
      });