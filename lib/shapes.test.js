const {Circle, Square, Triangle, Shape} = require('./shapes.js');

describe ('Circle', () => {
    test('Testing the render method of circle', () => {
        const circle = new Circle (`blue`,`abc`,`red`)
        const control = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="blue" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="red">abc</text></svg>`;
        expect(circle.render()).toBe(control);
      });
});

 describe ('Square', () => {
    test('Testing the render method of square', () => {
        const square = new Square (`blue`,`abc`,`red`);
        const control = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="blue" /><text x="100" y="125" font-size="70" text-anchor="middle" fill="red">abc</text></svg>`;
        expect(square.render()).toBe(control);
      });
});

 describe ('Triangle', () => {
    test('Testing the render method of triangle', () => {
        const triangle = new Triangle (`blue`,`abc`,`red`)
        const control = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="blue" /><text x="100" y="185" font-size="70" text-anchor="middle" fill="red">abc</text></svg>`;
        expect(triangle.render()).toBe(control);
      });
});