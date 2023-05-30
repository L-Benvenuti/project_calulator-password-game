export const mainRight = function () {
  const mainRight = document.createElement('div');
  mainRight.classList = 'right-column';

  const capyDisplay = document.createElement('div');
  capyDisplay.classList = 'image-display';
  capyDisplay.innerText = 'Here is going to show the capys faces as the game progresses';

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

  output.append(
    first,
    second,
    third,
  );

  outContainer.appendChild(output);

  mainRight.append(
    capyDisplay,
    outContainer,
  );

  return mainRight;
};
