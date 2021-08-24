const functions = require('./main');
const stringLength = functions.stringLength;

it('Count length of string', () => {
  expect(stringLength("string")).toBe(6);
  expect(stringLength("longString")).toBe(10);
});

it('Length is between 1 and 10 characters', () => {
  expect(() => {
    stringLength('')
  })
  .toThrow('Please use string that has length between 1 and 10 characters');
  expect(() => {
    stringLength('moreThanTenLetters')
  })
  .toThrow('Please use string that has length between 1 and 10 characters')
})