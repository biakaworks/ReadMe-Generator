console.log("Yo Test Test")

// Const that RMG needs to have in the beginning
// const fs = require('fs');
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
    // .then((data) => {
    //     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
    //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //       err ? console.log(err) : console.log('Success!')
    //     );
    //   });


// description, installation instructions, usage information, contribution guidelines, and test instructions