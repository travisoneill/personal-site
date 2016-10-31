export default class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.r = 2
    this.vx = 0;
    this.vy = 0;
  }

  draw({ctx, inRad, canvasHeight, canvasWidth}){
    ctx.beginPath();
    ctx.arc(this.x * canvasWidth, this.y * canvasHeight, this.r, 0, inRad(360));
    ctx.fill();
  }

  step(){
    this.x += this.vx;
    this.y += this.vy;
  }
}
