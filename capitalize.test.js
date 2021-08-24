const functions = require('./main');
const capitalize = functions.capitalize;

describe('My capitalize function', () => {
  it('takes string as an argument and return it with the first letter capitalized', () => {
    expect(capitalize('string')).toBe('String');
  })
});