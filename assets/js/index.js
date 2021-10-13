const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        type: "input",
        message: "?",
        name: "",
    },
    {
        type: "input",
        message: "?",
        name: "",
    },
    {
        type: "input",
        message: "?",
        name: "",
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile()
    });
}