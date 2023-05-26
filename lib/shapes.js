const fs = require('fs');

class Shape {
    constructor(shapeColor, svgString, textColor) {
        this.shapeColor = shapeColor;
        this.svgString = svgString;
        this.textColor = textColor;
    };
    setColor(color) {
        this.shapeColor = color
    }

    generateSVG() {
        const svg = this.render();
        fs.writeFileSync('logo.svg', svg);
    }
};

class Circle extends Shape {
    constructor(shapeColor, svgString, textColor) {
        super(shapeColor, svgString, textColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.shapeColor}" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.svgString}</text></svg>`;
    }
};

class Square extends Shape {
    constructor(shapeColor, svgString, textColor) {
        super(shapeColor, svgString, textColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${this.shapeColor}" /><text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.svgString}</text></svg>`;
    }
};

class Triangle extends Shape {
    constructor(shapeColor, svgString, textColor) {
        super(shapeColor, svgString, textColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}" /><text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.svgString}</text></svg>`;
    }
};

// Usage:
const circle = new Circle('red', 'ABC', 'black');
circle.generateSVG(); // This will generate an SVG file named "logo.svg" with a red circle and "ABC" text on it




// export function to the index.js file
module.exports = { Circle, Triangle, Square, Shape };