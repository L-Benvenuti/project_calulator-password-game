class Calculator {
  constructor(previousNumText, currentNumText) {
    this.previousNumText = previousNumText;
    this.currentNumText = currentNumText;
    this.clear();
  }

  clear() {
    this.previousNumText = '';
    this.currentNumText = '';
    this.operation = undefined;
  }

  delete() {
    this.currentNum = this.currentNum.toString().slice(0, -1);
  }

  //   creating number with more digits
  appendNumber(number) {
    if (number === '.' && this.currentNum.includes('.')) return;
    this.currentNum = this.currentNum.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentNum === '') return;
    if (this.previousNum !== '') {
      this.operate();
    }

    this.operation = operation;
    this.previousNum = this.currentNum;
    this.currentNum = '';
  }

  operate() {
    let computation;
    const prev = parseFloat(this.previousNum);
    const curr = parseFloat(this.currentNum);

    if (prev.isNaN || curr.isNaN) return;

    switch (this.operation) {
      case '÷':
        computation = prev / curr;
        break;
      case '×':
        computation = prev * curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '+':
        computation = prev + curr;
        break;
      default:
    }

    this.currentNum = computation;
    this.operation = undefined;
    this.previousNum = '';
  }

  //   transforming number in string with integer and decimals
  getDisplayNum(number) {
    const stringNum = number.toString();
    const integerDigits = parseFloat(stringNum.split('.')[0]);
    const decimalDigits = stringNum.split('.')[1];

    let integerDisplay;

    if (integerDigits.isNaN) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    }
    return integerDisplay;
  }

  updateDisplay() {
    this.currentNumText.innerText = this.getDisplayNum(this.currentNum);
    if (this.operation != null) {
      this.previousNumText.innerText = `${this.getDisplayNum(this.previousNum)} ${this.operation}`;
    } else {
      this.previousNumText.innerText = '';
    }
  }
}

export const calcLogic = function () {
  // initializing buttons and display
  const numberBtns = document.querySelectorAll('#num');
  const operationBtns = document.querySelectorAll('#op');
  const equalBtn = document.querySelector('#result');
  const clearBtn = document.querySelector('clear');
  const delBtn = document.querySelector('del');
  const previousNumText = document.querySelector('#prevNumb');
  const currentNumText = document.querySelector('#currentNumb');

  const calculator = new Calculator(previousNumText, currentNumText);

  numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      calculator.appendNumber(btn.innerText);
      calculator.updateDisplay();
    });
  });

  operationBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      calculator.chooseOperation(btn.innerText);
      calculator.updateDisplay();
    });
  });

  equalBtn.addEventListener('click', () => {
    calculator.operate();
    calculator.updateDisplay();
  });

  clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
  });

  delBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
  });
};
