import Initial from '../capy-imgs/capyGame.png';

export const mainRight = function () {
  const mainRight = document.createElement('div');
  mainRight.classList = 'right-column';

  const capyDisplay = document.createElement('div');
  capyDisplay.classList = 'image-display';

  const firstImg = new Image();
  firstImg.src = Initial;

  capyDisplay.appendChild(firstImg);

  const tempBtn = document.createElement('button');
  tempBtn.id = 'randomize';
  tempBtn.innerText = 'Generate Image';

  const outContainer = document.createElement('div');
  outContainer.classList = 'outContainer';

  const output = document.createElement('ul');
  output.classList = 'pass-output';

  const first = document.createElement('li');
  first.classList = 'output';

  const second = document.createElement('li');
  second.classList = 'output';

  const third = document.createElement('li');
  third.classList = 'output';

  const fourth = document.createElement('li');
  fourth.classList = 'output';

  const fifth = document.createElement('li');
  fifth.classList = 'output';

  output.append(
    first,
    second,
    third,
    fourth,
    fifth,
  );

  outContainer.appendChild(output);

  mainRight.append(
    capyDisplay,
    tempBtn,
    outContainer,
  );

  return mainRight;
};
