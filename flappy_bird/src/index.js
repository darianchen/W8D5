import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
canvas.addEventListener('click', (event) => {game.click()})
document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    event.preventDefault()
    console.log('space presed')
    game.toggleRunning()
  }
})
let game = new FlappyBird(canvas);
game.play();