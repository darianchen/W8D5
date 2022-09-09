import Pipe from './pipe.js'

const CONSTANTS = {
  PIPE_DISTANCE:  220,
  PIPE_GAP:  150,
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [new Pipe(dimensions)];
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx) {
    this.drawBackground(ctx)
    this.drawPipes(ctx)
    this.movePipes()
  }

  drawPipes(ctx){
    this.pipes.forEach(pipe => {
      ctx.fillStyle = "green";
      ctx.fillRect(pipe.posX-100, 0, pipe.width, pipe.gapStartHeight)
      ctx.fillStyle = "green";
      ctx.fillRect(pipe.posX-100, (pipe.gapStartHeight + CONSTANTS.PIPE_GAP), pipe.width, 10000)
    })
  }

  movePipes () {
    this.pipes.forEach(pipe => {
      pipe.posX -= 3
    })
  }

}