import { calcElements } from './calculator';

export const setup = function () {
  const container = document.getElementById('content');

  const main = document.createElement('main');

  const mainLeft = document.createElement('div');
  mainLeft.classList = 'left-column';
  const mainRight = document.createElement('div');
  mainRight.classList = 'right-column';

  mainLeft.appendChild(calcElements());

  main.appendChild(mainLeft);
  main.appendChild(mainRight);

  container.appendChild(main);
};
