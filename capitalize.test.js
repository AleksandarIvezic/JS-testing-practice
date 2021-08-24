const functions = require('./main');
const capitalize = functions.capitalize;

describe('My capitalize function', () => {
  it('takes string as an argument and return it with the first letter capitalized', () => {
    expect(capitalize('string')).toBe('String');
  });
  it('throws error if you try to put wrong type of input', () => {
    expect(() => capitalize(644)).toThrow('Please enter the accurate input')
  })
});