
// getters
let display = document.getElementById('display');
const ce = document.getElementById('ce');
const arrowLeft = document.getElementById('arrowLeft');
const divide = document.getElementById('divide');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const equals = document.getElementById('equals');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
let lastAmount = 0;
let operator = '';
// event listeners
one.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 1;
  } else {
    display.innerText += 1;
  }
})
two.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 2;
  } else {
    display.innerText += 2;
  }
})
three.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 3;
  } else {
    display.innerText += 3;
  }
})
four.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 4;
  } else {
    display.innerText += 4;
  }
})
five.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 5;
  } else {
    display.innerText += 5;
  }
})
six.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 6;
  } else {
    display.innerText += 6;
  }
})
seven.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 7;
  } else {
    display.innerText += 7;
  }
})
eight.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 8;
  } else {
    display.innerText += 8;
  }
})
nine.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 9;
  } else {
    display.innerText += 9;
  }
})
zero.addEventListener('click', () => {
  if (display.innerText === '0') {
    display.innerText = 0;
  } else {
    display.innerText += 0;
  }
})
ce.addEventListener('click', () => {
  display.innerText = 0;
})
arrowLeft.addEventListener('click', () => {
  let str = display.innerText;
  display.innerText = str.substring(0, str.length - 1);
  if (display.innerText == '') {
    display.innerText = 0;
  }
})
divide.addEventListener('click', () => {
  lastAmount = display.innerText;
  display.innerText = 0;
  operator = 'divide';
})
multiply.addEventListener('click', () => {
  lastAmount = display.innerText;
  display.innerText = 0;
  operator = 'multiply';
})
add.addEventListener('click', () => {
  lastAmount = display.innerText;
  display.innerText = 0;
  operator = 'add';
})
minus.addEventListener('click', () => {
  lastAmount = display.innerText;
  display.innerText = 0;
  operator = 'minus';
})
equals.addEventListener('click', () => {
  let result = 0
  switch (operator) {
    case 'add':
      result = parseInt(lastAmount) + parseInt(display.innerText);
      break;
    case 'minus':
      result = parseInt(lastAmount) - parseInt(display.innerText);
      break;
    case 'multiply':
      result = parseInt(lastAmount) * parseInt(display.innerText);
      break;
    case 'divide':
      result = parseInt(lastAmount) / parseInt(display.innerText);
      break;
  }
  display.innerText = result;
})