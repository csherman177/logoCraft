const { Circle, Square, Triangle } = require('./shapes.js');

class SVG {
  constructor(svgText, shapeChoice) {
    this.svgText = svgText;
    this.shapeChoice = shapeChoice;
  }

}

  setText(shapeChoice, svgText) {
    this.svgText = `<text x="150" y="125" font-size="45" text-anchor="middle" fill=${shapeChoice}>${svgText}</text>`;
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

  render() 
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeChoice}${this.svgText}</svg>`
    `<circle cx="150" cy="100" r="80" stroke="black" fill="${this.shapeColor}" />;
  };
};

module.exports = {SVG};
