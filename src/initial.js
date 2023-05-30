export const initialContent = function () {
  const container = document.getElementById('content');

  const welcome = document.createElement('h1');
  welcome.innerText = 'Calculator Game';
  welcome.classList = 'title';

  const instructions = document.createElement('p');
  instructions.innerText = 'Instructions: to play this game, you gotta know what to expect blah blah blah'
    + '\nGood luck!';
  instructions.classList = 'instructions';

  const startBtn = document.createElement('p');
  startBtn.classList = 'btn';
  startBtn.innerText = 'Start';
  startBtn.addEventListener('click', () => { console.log('yes!'); });

  container.appendChild(welcome);
  container.appendChild(instructions);
  container.appendChild(startBtn);
};
