const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writefile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            name: "badge",
            message: "What badge do you want to add?",
            choices: [
                "badge1",
                "badge2",
                "badge3"
            ]
        },
        {
            type: "input",
            name: "project-title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a description for you project."
        },
        {
            type: "list",
            name: "contents",
            message: "What do you want for your table of contents?",
            choice: [
                "Installation",
                "Usage",
                "Credits",
                "License"
            ]

        },

    ])
}

function generateHTML(answers){
    return `
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.badge}</h1>
      <p class="lead">I am from ${answers.project-title}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.description}</li>
        <li class="list-group-item">LinkedIn: ${answers.contents}</li>`
  }


promptUser()
  .then(function(answers) {
      const readme = generateHTML(answers);
      return writeFileAsync("README.md", readme);
  })
  .then(function() {
      console.log("Success!");
  })
  .catch(function(err) {
      console.log(err);
  });
// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
