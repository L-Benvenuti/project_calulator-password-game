class Calculator {
  constructor(previousNumText, currentNumText) {
    this.previousNumText = previousNumText;
    this.currentNumText = currentNumText;
    // calling the clear function right at the beginning to set it to the cleared default values
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  //   creating number with more digits
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.operate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  operate() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);

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
        return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
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
    this.currentNumText.innerText = this.currentOperand;
    this.currentNumText.innerText = this.getDisplayNum(this.currentOperand);
    if (this.operation != null) {
      this.previousNumText.innerText = `${this.getDisplayNum(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousNumText.innerText = '';
    }

    if (this.currentOperand.isNaN) {
      this.currentOperand = '';
    } if (this.previousOperand.isNaN) {
      this.previousOperand = '';
    }
  }
}

export const calcLogic = function () {
  // initializing buttons and display
  const numberBtns = document.querySelectorAll('[data-number]');
  const operationBtns = document.querySelectorAll('[data-operation]');
  const equalBtn = document.querySelector('[data-equals]');
  const clearBtn = document.querySelector('[data-all-clear]');
  const delBtn = document.querySelector('[data-delete]');
  const previousNumText = document.querySelector('[data-previous-operand]');
  const currentNumText = document.querySelector('[data-current-operand]');

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
