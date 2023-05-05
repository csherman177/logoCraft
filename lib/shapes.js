

// create generate shape function to generate each one
class Shape {
    constructor() {
       this.shapeColor = "";
    };

    userColor(selectedColor){
        this.shapeColor = selectedColor
    }

};


class Circle extends Shape {

    render(){
        return `<circle cx="150" cy="100" r="80" stroke="black" fill="${this.shapeColor}" />`
    }
};


class Square extends Shape {
    render(){
        // this needs to return the XML for the square shape
        return `<rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />`
        
    }
};

class Triangle extends Shape {
    render(){
        // this needs to return theXML for the triangle shape
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
};



// export function to the index.js file
module.exports = {Circle, Square, Triangle};