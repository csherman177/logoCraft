// Inquirer (node package manager) import

const inquirer = require('inquirer');
const fs  = require ('fs')
const shapes = require('./shapes')

// add the svg.js file
//add the shapes.js file



const questions = [
    {
        type: 'input',
        message: 'What 3 letters would you like to appear on LOGO?',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Which color would you like your text to be?',
        name: 'txtcolor'
    },    
    {
        type: 'input',
        message: 'Which color would you like your shape to be?',
        name: 'color'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which would you like to use?',
        choices: ['circle', 'triangle', 'square']
       
    },
];

// const choices; {
//     if (answers.shape === "circle") {
//         choices = New ShapeChoices();
//         //insert SVG String
//     }
//     if (answers.shape === "triangle") {
//         choices = New ShapeChoices();
//         //insert SVG String
//     }
//     if (answers.shape === "square") {
//         choices = New ShapeChoices();
//         //insert SVG String
//     }

// }

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
    .them((answers) => {
        console.log(answers)
        writeToFile('logo.svg',markDown(answers));
    })
}

