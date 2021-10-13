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
    },
    fs.writeToFile('questions.txt', questions, error => {
        error ? console.log(error) : "File Created"
    })
];