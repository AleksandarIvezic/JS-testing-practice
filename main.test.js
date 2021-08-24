const stringLength = require('./main');

it('Count length of string', () => {
  expect(stringLength("string")).toBe(6);
  expect(stringLength("longString")).toBe(10);
}) 