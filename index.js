// Inquirer (node package manager) import

const inquirer = require('inquirer');
const fs  = require ('fs');
const shapes = require('./lib/shapes');

// add the svg.js file
//add the shapes.js file



const questions = [
    // empty string to hold letters
    {
        type: 'input',
        message: 'What 3 letters would you like to appear on LOGO?',
        name: 'text'
    },
    // how do I link the colors to the project?
    {
        type: 'input',
        message: 'Which color would you like your text to be?',
        name: 'txtcolor'
    },    
      // how do I link the colors to the project?
    {
        type: 'input',
        message: 'Which color would you like your shape to be?',
        name: 'color'
    },
    // what do I map the shapes too?
    {
        type: 'list',
        name: 'shape',
        message: 'Which would you like to use?',
        choices: ['circle', 'triangle', 'square']
       
    },
];


function writeToFile(fileName,answers) {
    fs.writeFile(fileName,data,(err) => {
        if(err){
            console.log('error')
        }
        else console.log('success');
    });
}

function init() {
    inquirer.createPromptModule(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile('logo.svg',markDown(answers));
    })
}

