const { reverseString }= require('./main');

it('Reverse string', () => {
  expect(reverseString("string")).toBe('gnirts');
  expect(reverseString("longString")).toBe('gnirtSgnol');
});