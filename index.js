// Inquirer (node package manager) import
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');
const setShape = require('./lib/generateShape.js')

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
    message: 'Which shape would you like to use?',
    choices: ['circle', 'triangle', 'square']
  },
];

function writeToFile(fileName, data) {
  //const bufferData = Buffer.from(JSON.stringify(data));
  fs.writeFile(fileName, data, (err) => {
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
    const template = setShape(data);
    writeToFile('logo.svg', template);
  });
}

init();
