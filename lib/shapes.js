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
      return `<polygon points="150, 0 300, 200 0, 200" style="fill:${this.color}" />`;
    }
  };
  
class Circle extends Shape {
    constructor(color) {
      super(color);
    }
    render() {
      return `<circle cx="150" cy="100" r="100" style="fill:${this.color}" />`;
    }
  }
  
class Square extends Shape {
    constructor(color) {
      super(color);
    }
    render() {
      return `<rect x="50" y="0" width="200" height="200" style="fill:${this.color}" />`;
    }
  }
module.exports = {Triangle, Circle, Square};
  