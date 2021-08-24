const stringLength = (string) => {
  if (string.length < 1 || string.length > 10 ) {
    throw new Error( 'Please use string that has length between 1 and 10 characters');
  }
  return string.length;
}

const reverseString = (string) => string.split('').reverse().join('');

class Calculator {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }
  
  add (a, b) {
    return a + b;
  };

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}


exports.stringLength = stringLength;
exports.reverseString = reverseString;