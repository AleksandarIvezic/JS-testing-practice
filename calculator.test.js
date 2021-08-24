const functions = require('./main');
const Calculator = functions.Calculator;

describe('Calculator add method', () => {
  test('is summing 2 numbers', () => {
    const calculator = new Calculator( 12, 15);
    expect(calculator.add()).toBe(27);
  });

  test('Throws error if one number is missing', () => {
    const calculator = new Calculator(12);
    expect(()=> calculator.add()).toThrow('Please enter the missing parameter');
  });

  test('Throws error if both numbers are missing', () => {
    const calculator = new Calculator();
    expect(()=> calculator.add()).toThrow('Please enter the missing parameter');
  });

  test('Throws error if you put wrong type of input', () => {
    const calculator = new Calculator('a', 4);
    expect(()=> calculator.add()).toThrow('Please enter the accurate input');
  });
});

describe('Calculator subtract method', () => {
  test('is subtracting 2 numbers', () => {
    const calculator = new Calculator( 15, 12);
    expect(calculator.subtract()).toBe(3);
  });

  test('Throws error if one number is missing', () => {
    const calculator = new Calculator(12);
    expect(()=> calculator.subtract()).toThrow('Please enter the missing parameter');
  });

  test('Throws error if both numbers are missing', () => {
    const calculator = new Calculator();
    expect(()=> calculator.subtract()).toThrow('Please enter the missing parameter');
  });

  test('Throws error if you put wrong type of input', () => {
    const calculator = new Calculator('a', 4);
    expect(()=> calculator.subtract()).toThrow('Please enter the accurate input');
  });
});

describe('Calculator divide method', () => {
  test('is dividing 2 numbers', () => {
    const calculator = new Calculator( 15, 3);
    expect(calculator.divide()).toBe(5);
  });

  test('Throws error if one number is missing', () => {
    const calculator = new Calculator(12);
    expect(()=> calculator.divide()).toThrow('Please enter the missing parameter');
  });

  test('Throws error if both numbers are missing', () => {
    const calculator = new Calculator();
    expect(()=> calculator.divide()).toThrow('Please enter the missing parameter');
  });

  test('Throws error if you put wrong type of input', () => {
    const calculator = new Calculator('a', 4);
    expect(()=> calculator.divide()).toThrow('Please enter the accurate input');
  });
});
describe('Calculator multiply method', () => {
  test('is multiplying 2 numbers', () => {
    const calculator = new Calculator( 15, 3);
    expect(calculator.multiply()).toBe(45);
  });

  test('Throws error if one number is missing', () => {
    const calculator = new Calculator(12);
    expect(()=> calculator.multiply()).toThrow('Please enter the missing parameter');
  });

  test('Throws error if both numbers are missing', () => {
    const calculator = new Calculator();
    expect(()=> calculator.multiply()).toThrow('Please enter the missing parameter');
  });

  test('Throws error if you put wrong type of input', () => {
    const calculator = new Calculator('a', 4);
    expect(()=> calculator.multiply()).toThrow('Please enter the accurate input');
  });
});