const CONSTANTS = {
  WIDTH:  50,
};


export default class Pipe {
  constructor (dimensions) {
    this.dimensions = dimensions;
    this.posX = dimensions['width']
    this.gapStartHeight = Math.random() * (dimensions['height']-50 - 50) + 50
    this.width = CONSTANTS.WIDTH;
  } 
}