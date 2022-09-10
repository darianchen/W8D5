import Level from './level.js';
import Bird from './bird.js';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate () {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);

    this.ctx.font = "48px serif";
    this.ctx.fillText(this.score, 10, 50)
    
    if (this.level.birdPassesPipe(this.bird)) {
      this.score++;
    }
    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    }
    if (this.level.pipeCollides(this.bird) || this.birdHitsGround()) {
      alert(`YOU LOSE! Your score is ${this.score}`);
      this.restart();
    }
  }
  
  restart () {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.score = 0;
    this.animate();
  }

  play () {
    this.running = true;
    this.animate();
  }

  click () {
    this.bird.flap();
  }

  toggleRunning () {
    if (this.running) {
      this.running = false;
    } else {
      this.play();
    }
  }

  birdHitsGround () {
    if (this.bird.bottomY() >= this.dimensions['height']) {
      return true;
    }
    return false;
  }

}