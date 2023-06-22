import { calcElements } from './calculator';
import { mainRight } from '../right-side/password-display';
import { calcLogic } from './calc-logic';

export const setup = function () {
  const container = document.getElementById('content');

  const main = document.createElement('main');

  const mainLeft = document.createElement('div');
  mainLeft.classList = 'left-column';

  mainLeft.appendChild(calcElements());

  main.appendChild(mainLeft);
  main.appendChild(mainRight());

  container.appendChild(main);

  calcLogic();
};
