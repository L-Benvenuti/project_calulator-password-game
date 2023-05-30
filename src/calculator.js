export const calcElements = function () {
  const calculator = document.createElement('div');
  calculator.classList = 'calc';

  const top = document.createElement('div');
  top.classList = 'top';

  const display = document.createElement('div');
  display.classList = 'display';
  display.innerText = '';

  top.appendChild(display);

  const calcbody = document.createElement('div');
  calcbody.classList = 'calc-body';

  const clear = document.createElement('div');
  clear.classList = 'btn';
  clear.id = 'ac';
  clear.innerText = 'AC';

  const del = document.createElement('div');
  del.classList = 'btn';
  del.id = 'del';
  del.innerText = 'DEL';

  const div = document.createElement('div');
  div.classList = 'btn operator';
  div.id = ':';
  div.innerText = '÷';

  const seven = document.createElement('div');
  seven.classList = 'btn';
  seven.innerText = '7';

  const eight = document.createElement('div');
  eight.classList = 'btn';
  eight.innerText = '8';

  const nine = document.createElement('div');
  nine.classList = 'btn';
  nine.innerText = '9';

  const mul = document.createElement('div');
  mul.classList = 'btn operator';
  mul.id = 'x';
  mul.innerText = '×';

  const four = document.createElement('div');
  four.classList = 'btn';
  four.innerText = '4';

  const five = document.createElement('div');
  five.classList = 'btn';
  five.innerText = '5';

  const six = document.createElement('div');
  six.classList = 'btn';
  six.innerText = '6';

  const sub = document.createElement('div');
  sub.classList = 'btn operator';
  sub.id = '-';

  const one = document.createElement('div');
  one.classList = 'btn';
  one.innerText = '1';

  const two = document.createElement('div');
  two.classList = 'btn';
  two.innerText = '2';

  const three = document.createElement('div');
  three.classList = 'btn';
  three.innerText = '3';

  const sum = document.createElement('div');
  sum.classList = 'btn operator';
  sum.id = '+';

  const zero = document.createElement('div');
  zero.classList = 'btn';
  zero.innerText = '0';

  const dot = document.createElement('div');
  dot.classList = 'btn';
  dot.id = '.';
  dot.innerText = '.';

  const result = document.createElement('div');
  result.classList = 'btn';
  result.id = 'result';
  result.innerText = '=';

  calcbody.append(
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

  calculator.append(top, calcbody);

  return calculator;
};
