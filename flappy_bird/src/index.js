import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
canvas.addEventListener('click', (event) => {game.click()})
let game = new FlappyBird(canvas);
game.play();