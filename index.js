const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "confirm",
            name: "confirm",
            message: "Would you like to continue?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a description of your project."
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "Table of Contents"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "What tests were run on this project?"
        },
        {
            type: "list",
            name: "license",
            message: "What license does your project use?",
            choices: ["MIT", "Apache", "GPL", "None"]
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub URL?"
        },
    ]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", response);
    });
}

// function call to initialize program
init();

