const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes.js');

// Prompt user input here with inquirer questions
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter logo text here. Please limit to 3 letters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color. Please use CSS colors or a number.',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for your logo background.',
    choices: ['Triangle', 'Square', 'Circle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a shape color using CSS colors or a number.',
  },
];

async function generateLogo() {
  try {
    const answers = await inquirer.prompt(questions);
    const { text, textColor, shape, shapeColor } = answers;
    // Create the corresponding shape object based on user choice
    let logoShape;
    switch (shape) {
      case 'Triangle':
        logoShape = new Triangle(shapeColor);
        break;
      case 'Square':
        logoShape = new Square(shapeColor);
        break;
      case 'Circle':
        logoShape = new Circle(shapeColor);
        break;
      default:
        throw new Error('Invalid shape choice.');
    }
    // Generate the SVG logo
    const svgContent = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${logoShape.render()}
      <text x="200" y="200" dominant-baseline="middle" text-anchor="middle" style="fill:${textColor};">${text}</text>
    </svg>`;
    // Save the SVG file
    const filename = 'logo.svg';
    fs.writeFile(filename, svgContent, (err) => {
      if (err) {
        throw err;
      }
      console.log('Logo saved successfully as', filename);
    });
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}
generateLogo();
