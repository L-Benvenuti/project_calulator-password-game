import { calcElements } from './calculator';
import { mainRight } from './password-display';

export const setup = function () {
  const container = document.getElementById('content');

  const main = document.createElement('main');

  const mainLeft = document.createElement('div');
  mainLeft.classList = 'left-column';

  mainLeft.appendChild(calcElements());

  main.appendChild(mainLeft);
  main.appendChild(mainRight());

  container.appendChild(main);
};
