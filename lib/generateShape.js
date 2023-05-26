const {Circle, Square, Triangle} = require('./shapes.js');


function setShape(response) {

    if (response.shape === 'circle') {
        let userShape = new Circle (response.color, response.text, response.txtcolor)
        return userShape.render()
    }

    if (response.shape === 'square') {
        let userShape = new Square (response.color, response.text, response.txtcolor)
        return userShape.render()
    }

    if (response.shape === 'triangle') {
        let userShape = new Triangle (response.color, response.text, response.txtcolor)
        return userShape.render()
    }
};

module.exports = setShape;