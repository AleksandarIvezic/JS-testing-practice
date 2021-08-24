const stringLength = (string) => {
  if (string.length < 1 || string.length > 10 ) {
    throw new Error( 'Please use string that has length between 1 and 10 characters');
  }
  return string.length;
}

const reverseString = (string) => string.split('').reverse().join('');


exports.stringLength = stringLength;
exports.reverseString = reverseString;