const inquirer = require("inquirer");
const generateMD = require("./generateMarkdown");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileSync = util.promisify(fs.writeFile);

async function promptUser() {
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a description for you project."
        },
        {
            type: "input",
            name: "email",
            message: "What is your Github email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Github username?"
        },

    ])

    const queryURL = `https://api.github.com/users/${answers.github}`
    let response = await axios.get(queryURL)
        const imageURL = response.data.avatar_url;
    fs.writeFileSync("README.md", generateMD(answers, imageURL));

}






































// function init() {

// }

// function generateHTML(answers){
//     return `
//     <div class="jumbotron jumbotron-fluid">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${answers.badge}</h1>
//       <p class="lead">I am from ${answers.project-title}.</p>
//       <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${answers.description}</li>
//         <li class="list-group-item">LinkedIn: ${answers.contents}</li>`
//   }


// promptUser()
//   .then(function(answers) {
//       const genReadme = readme(answers);
//       return writeFileAsync("README.md", readme);
//   })
//     (function() {
//       console.log("Success!");
//   })
//   .catch(function(err) {
//       console.log(err);
//   });
// const questions = [

// ];



// init();
promptUser();