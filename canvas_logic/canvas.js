// import Point from './point_class';
import Polygon from './polygon_class';
import * as data from './constants';

function initialize(canvasEl){
  window.addEventListener('resize', resizeCanvas, false);
  data.canvas = canvasEl;
  data.ctx = canvasEl.getContext('2d');
  // randomPoints(100);
  randomPolygons(10);
  resizeCanvas();
}

function resizeCanvas(event){
  data.canvasHeight = window.innerHeight;
  data.canvasWidth = window.innerWidth;
  data.canvas.height = data.canvasHeight;
  data.canvas.width = data.canvasWidth;
  // drawPoints();
  drawPolygons();
}

// function randomPoints(n){
//   for (var i = 0; i < n; i++){
//     let x = Math.random();
//     let y = Math.random();
//     data.points.push(new Point(x, y));
//   }
// }

function randomPolygons(n){
  for (var i = 0; i < n; i++){
    const params = {
      x: Math.random(),
      y: Math.random(),
      r: data.randInt(50, 25),
      n: data.randInt(8, 3)
    }
    data.polygons.push(new Polygon(params));
  }
}

// function drawPoints(){
//   data.ctx.fillStyle = '#ffffff';
//   data.points.forEach( point => point.draw(data) );
// }

function drawPolygons(){
  data.polygons.forEach( polygon => polygon.draw(data) );
}

// class Point{
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//     this.r = 2
//     this.vx = 0;
//     this.vy = 0;
//   }
//
//   draw(){
//     ctx.beginPath();
//     ctx.arc(this.x * canvasWidth, this.y * canvasHeight, this.r, 0, inRad(360));
//     ctx.fill();
//   }
//
//   step(){
//     this.x += this.vx;
//     this.y += this.vy;
//   }
// }
//
// class Polygon{
//   constructor(x, y, n, r){
//     this.x = x;
//     this.y = y;
//     this.r = 50
//     this.vx = 0;
//     this.vy = 0;
//   }
//
//   draw(){
//     ctx.beginPath();
//     ctx.arc(this.x * canvasWidth, this.y * canvasHeight, this.r, 0, inRad(360));
//     ctx.fill();
//   }
//
//   step(){
//     this.x += this.vx;
//     this.y += this.vy;
//   }
// }




// const inRad = deg => Math.PI * deg / 180

module.exports = {
  initialize: initialize
}
