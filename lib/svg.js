const { Circle, Square, Triangle } = require('./shapes.js');

class SVG {
  constructor(svgText, shapeChoice) {
    this.svgText = '';
    this.shapeChoice = shapeChoice;
  }

  setText(shapeChoice, text) {
    this.svgText = `<text x="150" y="125" font-size="45" text-anchor="middle" fill=${shapeChoice}>${text}</text>`;
  }

  setShape(data) {
    let userSVG = new SVG(data.svgText, data.shapeChoice);

    if (data.shape === 'circle') {
      let userShape = new Circle();
      userShape.userColor(data.color);
      return userSVG.render(userShape);
    }
    if (data.shape === 'square') {
      let userShape = new Square();
      userShape.userColor(data.color);
      return userSVG.render(userShape);
    }
    if (data.shape === 'triangle') {
      let userShape = new Triangle();
      userShape.userColor(data.color);
      return userSVG.render(userShape);
    }
  }

  render(shape) {
    return `<svg width="300" height="250">${this.shapeChoice}${this.svgText}</svg>`;
  }
}

module.exports = { SVG };