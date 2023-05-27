const {Triangle, Circle, Square} = require('./shapes.js');

describe('Shape', () => {
  test('should throw an error when calling render() on the Shape class', () => {
    const shape = new Shape('red');
    expect(() => shape.render()).toThrow('Method not implemented');
  });
});

describe('Triangle', () => {
  test('renders a SVG triangle with the given color', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toEqual(
      '<polygon points="50,0 100,100 0,100" style="fill:blue" />'
    );
  });
});

describe('Circle', () => {
  test('renders a SVG circle with the given color', () => {
    const circle = new Circle('green');
    expect(circle.render()).toEqual(
      '<circle cx="50" cy="50" r="50" style="fill:green" />'
    );
  });
});

describe('Square', () => {
  test('renders a SVG square with the given color', () => {
    const square = new Square('yellow');
    expect(square.render()).toEqual(
      '<rect width="100" height="100" style="fill:yellow" />'
    );
  });
});
