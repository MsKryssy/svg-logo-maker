class Shape {
    constructor(color) {
      this.color = color;
    }
   setColor(color) {
    this.color = color;
   }
}; 

class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
    render() {
      return `<polygon points="50,0 100,100 0,100" style="fill:${this.color}" />`;
    }
  };
  
class Circle extends Shape {
    constructor(color) {
      super(color);
    }
    render() {
      return `<circle cx="50" cy="50" r="50" style="fill:${this.color}" />`;
    }
  }
  
class Square extends Shape {
    constructor(color) {
      super(color);
    }
    render() {
      return `<rect width="100" height="100" style="fill:${this.color}" />`;
    }
  }
module.exports = {Triangle, Circle, Square};
  