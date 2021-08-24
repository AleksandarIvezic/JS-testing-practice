const functions = require('./main');
const reverseString = functions.reverseString;

it('Reverse string', () => {
  expect(reverseString("string")).toBe('gnirts');
  expect(reverseString("longString")).toBe('gnirtSgnol');
});