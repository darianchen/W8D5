const CONSTANTS = {
  WIDTH:  50,
  BIRD_WIDTH:  40,
  PIPE_GAP: 150
};


export default class Pipe {
  constructor (dimensions, offset) {
    this.dimensions = dimensions;
    this.posX = dimensions['width'] + offset;
    this.gapStartHeight = Math.random() * (dimensions['height']-50) + 50;
    this.width = CONSTANTS.WIDTH;
  } 

  collidesBird (bird) {
    let arr = bird.getBounds();
    let leftX = arr[0];
    let topY = arr[1];
    let rightX = arr[2];
    let bottomY = arr[3];
    
    // console.log(`Bird right is right of top pipe left?${birdRightBottom[0] >= this.posX}`)
    // console.log(`Bird top above top pipe bottom?${birdLeftTop[1] <= this.gapStartHeight}`)
    if (
      rightX >= this.posX &&
      topY <= this.gapStartHeight &&
      leftX <= this.posX + CONSTANTS.WIDTH
    ) {
      return true;
    } else if (
      rightX >= this.posX &&
      bottomY >= this.gapStartHeight + CONSTANTS.PIPE_GAP &&
      leftX <= this.posX + CONSTANTS.WIDTH
    ) {
      return true;
    }
    return false;
  }

  lowerPipeHeight () {
    this.gapStartHeight + CONSTANTS.PIPE_GAP;
  }
}