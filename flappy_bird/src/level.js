import Pipe from './pipe.js'

const CONSTANTS = {
  PIPE_DISTANCE:  220,
  PIPE_GAP:  150,
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [new Pipe(dimensions, 0),
      new Pipe(dimensions, CONSTANTS.PIPE_DISTANCE * 1),
      new Pipe(dimensions, CONSTANTS.PIPE_DISTANCE * 2)];
    this.pipePassed = false;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.drawPipes(ctx);
    this.movePipes();
  }

  drawPipes(ctx){
    this.pipes.forEach(pipe => {
      ctx.fillStyle = "green";
      ctx.fillRect(pipe.posX, 0, pipe.width, pipe.gapStartHeight);
      ctx.fillStyle = "green";
      ctx.fillRect(pipe.posX, (pipe.gapStartHeight + CONSTANTS.PIPE_GAP), pipe.width, 10000);
    })
  }

  movePipes () {
    this.pipes.forEach(pipe => {
      pipe.posX -= 3;
      if (pipe.posX < 0) {
        this.pipes.shift();
        this.newPipe();
        this.pipePassed = false;
      }
    })
  }

  newPipe () {
    this.pipes.push(new Pipe(this.dimensions, CONSTANTS.PIPE_GAP+33));
  }

  pipeCollides (bird) {
    if (this.pipes[0].collidesBird(bird)) {
      return true;
    }
    return false;
  }
  birdPassesPipe (bird) {
    if (this.pipePassed) {
    } else if (this.pipes[0].posX <= bird.posX) {
      this.pipePassed = true; // to be re toggled when pipe is deleted
      return true;
    }
    return false;
  }
}