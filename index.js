// Inquirer (node package manager) import

const inquirer = require('inquirer');
const fs  = require ('fs');
const shapes = require('./lib/shapes.js');
const { SVG, setShape } = require('./lib/svg.js');


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


function writeToFile(fileName, data) {
  if (typeof data === 'undefined') {
    console.log('Error: data is undefined');
    return;
  }
  const bufferData = Buffer.from(data);
  fs.writeFile(fileName, bufferData, (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log('File saved:', fileName);
    }
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const svg = new SVG();
    const svgElement = svg.setShape(data);
    const svgString = svg.render(svgElement);
    writeToFile('logo.svg', svgString);
  });
}

init();
