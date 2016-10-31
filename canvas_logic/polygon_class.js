import Point from './point_class';

export default class Polygon{
  constructor({x, y, n, r}){
    this.x = x;
    this.y = y;
    this.r = r / 1000;
    this.n = n;
    this.vx = 0;
    this.vy = 0;
    this.points = this.createPoints();
  }

  createPoints(){
    let points = [];
    const rad = deg => Math.PI * deg / 180;
    const step = 360 / this.n;
    for (var theta = 0; theta < 360; theta += step) {
      const x = this.x + (Math.cos(rad(theta)) * this.r);
      const y = this.y + (Math.sin(rad(theta)) * this.r);
      points.push(new Point(x, y));
    }
    return points;
  }

  createDiagonals(){

  }

  createSides(ctx, canvasHeight, canvasWidth){
  }

  draw({ctx, inRad, canvasHeight, canvasWidth}){
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ffffff';
    let start = this.points[this.points.length - 1];
    ctx.beginPath();
    ctx.moveTo(start.x * canvasWidth, start.y * canvasHeight);
    for (var i = 0; i < this.points.length; i++) {
      let point = this.points[i];
      ctx.lineTo(point.x * canvasWidth, point.y * canvasHeight);
    }
    ctx.stroke();

  }

  // step(){
  //   this.x += this.vx;
  //   this.y += this.vy;
  // }
}
