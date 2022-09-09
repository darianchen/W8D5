const CONSTANTS = {
  GRAVITY:  0.8,
  FLAP_SPEED:  -8,
  TERMINAL_VEL:  12,
  BIRD_WIDTH:  40,
  BIRD_HEIGHT:  30
};

export default class Bird {
  constructor (dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.posX = dimensions['width'] / 3;
    this.posY = dimensions['height'] / 2;
  }

  drawBird(ctx) {
    let posX = this.posX
    let posY = this.posY
    ctx.fillStyle = "yellow";
    ctx.fillRect(posX, posY, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move () {
    this.posY += this.velocity;
    this.velocity += CONSTANTS.GRAVITY;
    if (this.velocity > CONSTANTS.TERMINAL_VEL) {
      this.velocity = CONSTANTS.TERMINAL_VEL;
    }
  }

  flap () {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }
  
}