import Point from './point_class';
import { randInt } from './constants';

export default class Polygon{
  constructor({x, y, n, r}){
    this.x = x;
    this.y = y;
    this.r = r / 1000;
    this.n = n;
    this.theta = 0;
    this.dtheta = randInt(10, 1);
    this.vx = randInt(5, -5);
    this.vy = randInt(5, -5);
    // this.points = this.createPoints();
    this.tail = [];
  }

  createPoints(){
    let points = [];
    const rad = deg => Math.PI * deg / 180;
    const step = 360 / this.n;
    for (var theta = this.theta; theta < this.theta + 360; theta += step) {
      const x = this.x + (Math.cos(rad(theta)) * this.r);
      const y = this.y + (Math.sin(rad(theta)) * this.r);
      points.push(new Point(x, y));
    }
    // console.log(this.x, this.y);
    return points;
  }

  createDiagonals(){

  }

  draw({ctx, inRad, canvasHeight, canvasWidth}){
    this.tail.push(this.createPoints());
    if(this.tail.length > 16){this.tail.shift();}
    for (var i = 0; i < this.tail.length; i++) {
      let hex = (i * 17).toString(16);
      if(i === 0){ hex = '00'; }
      ctx.strokeStyle = '#' + hex + hex + hex;
      let shape = this.tail[i];
      let start = shape[shape.length - 1];
      ctx.beginPath()
      ctx.moveTo(start.x * canvasWidth, start.y * canvasHeight);
      for (var j = 0; j < shape.length; j++) {
        let point = shape[j];
        ctx.lineTo(point.x * canvasWidth, point.y * canvasHeight);
      }
      ctx.stroke();
    }
    this.step(canvasHeight, canvasWidth);
  }

  // draw({ctx, inRad, canvasHeight, canvasWidth}){
  //   this.points = this.createPoints();
  //   ctx.fillStyle = '#ffffff';
  //   ctx.strokeStyle = '#ffffff';
  //   let start = this.points[this.points.length - 1];
  //   ctx.beginPath();
  //   ctx.moveTo(start.x * canvasWidth, start.y * canvasHeight);
  //   for (var i = 0; i < this.points.length; i++) {
  //     let point = this.points[i];
  //     ctx.lineTo(point.x * canvasWidth, point.y * canvasHeight);
  //   }
  //   ctx.stroke();
  //   this.step(canvasHeight, canvasWidth);
  // }

  step(canvasHeight, canvasWidth){
    if(this.x + this.r > 1 || this.x - this.r < 0){
      this.vx *= -1;
    }
    if(this.y + this.r > 1 || this.y - this.r < 0){
      this.vy *= -1;
    }
    this.x += this.vx / canvasWidth;
    this.y += this.vy / canvasHeight;
    this.theta = (this.theta + this.dtheta) % 360;
    console.log(this.vx, this.vy);
  }
}
