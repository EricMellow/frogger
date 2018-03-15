class Frog {
  constructor() {
    this.x = 250;
    this.y = 600;
    this.width = 50;
    this.height = 50;
  }

  drawFrog(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveFrogUp() {
    this.y -= 50;
  }

  moveFrogDown() {
    this.y += 50;
  }

  moveFrogRight() {
    this.x += 50;
  }

  moveFrogLeft() {
    this.x -= 50;
  }
}

module.exports = Frog;