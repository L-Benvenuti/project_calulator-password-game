export const calcElements = function () {
  const calculator = document.createElement('div');
  calculator.classList = 'calculator-grid';

  const output = document.createElement('div');
  output.classList = 'output';

  const prevNumb = document.createElement('div');
  prevNumb.classList = 'previous-operand';
  prevNumb.setAttribute('data-previous-operand', '');

  const currentNumb = document.createElement('div');
  currentNumb.classList = 'current-operand';
  currentNumb.setAttribute('data-current-operand', '');

  output.append(
    prevNumb,
    currentNumb,
  );

  const clear = document.createElement('button');
  clear.setAttribute('data-all-clear', '');
  clear.classList = 'span-two';
  clear.innerText = 'AC';

  const del = document.createElement('button');
  del.setAttribute('data-delete', '');
  del.innerText = 'DEL';

  const div = document.createElement('button');
  div.setAttribute('data-operation', '');
  div.innerText = '÷';

  const seven = document.createElement('button');
  seven.setAttribute('data-number', '');
  seven.innerText = '7';

  const eight = document.createElement('button');
  eight.setAttribute('data-number', '');
  eight.innerText = '8';

  const nine = document.createElement('button');
  nine.setAttribute('data-number', '');
  nine.innerText = '9';

  const mul = document.createElement('button');
  mul.setAttribute('data-operation', '');
  mul.innerText = '×';

  const four = document.createElement('button');
  four.setAttribute('id', 'blah');
  four.innerText = '4';

  const five = document.createElement('button');
  five.setAttribute('data-number', '');
  five.innerText = '5';

  const six = document.createElement('button');
  six.setAttribute('data-number', '');
  six.innerText = '6';

  const sub = document.createElement('button');
  sub.setAttribute('data-operation', '');
  sub.innerText = '-';

  const one = document.createElement('button');
  one.setAttribute('data-number', '');
  one.innerText = '1';

  const two = document.createElement('button');
  two.setAttribute('data-number', '');
  two.innerText = '2';

  const three = document.createElement('button');
  three.setAttribute('data-number', '');
  three.innerText = '3';

  const sum = document.createElement('button');
  sum.setAttribute('data-operation', '');
  sum.innerText = '+';

  const zero = document.createElement('button');
  zero.setAttribute('data-number', '');
  zero.innerText = '0';

  const dot = document.createElement('button');
  dot.setAttribute('data-number', '');
  dot.innerText = '.';

  const result = document.createElement('button');
  result.classList = 'span-two';
  result.setAttribute('data-equals', '');
  result.innerText = '=';

  calculator.append(
    output,
    clear,
    del,
    div,
    seven,
    eight,
    nine,
    mul,
    four,
    five,
    six,
    sub,
    one,
    two,
    three,
    sum,
    zero,
    dot,
    result,
  );

  return calculator;
};
