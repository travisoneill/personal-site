import Polygon from './polygon_class';
import * as data from './constants';
import * as util from './util';

function initialize(canvasEl){
  window.addEventListener('resize', resizeCanvas, false);
  data.canvas = canvasEl;
  data.ctx = canvasEl.getContext('2d');
  canvasEl.addEventListener('mousemove', mouseMove, false);
  randomPolygons(10);
  resizeCanvas();
}

function mouseMove(event){
  data.mousePos.x = event.layerX;
  data.mousePos.y = event.layerY;
  console.log(data.mousePos);
}

function resizeCanvas(event){
  const oldInterval = data.interval;
  data.canvasHeight = window.innerHeight;
  data.canvasWidth = window.innerWidth;
  data.canvas.height = data.canvasHeight;
  data.canvas.width = data.canvasWidth;
  data.interval = setInterval(drawPolygons, 50);
  if(oldInterval){clearInterval(oldInterval);}
}

function randomPolygons(n){
  while(data.polygons.length < 10){
    //generate random params
    const params = {
      x: Math.random() * .9 + .05,
      y: Math.random() * .9 + .05,
      r: util.randInt(50, 25),
      n: util.randInt(8, 3)
    }
    //create polygon
    let polygon = new Polygon(params);
    let valid = true;
    //test for collison
    for (var i = 0; i < data.polygons.length; i++) {
      let p1 = data.polygons[i];
      if(util.distance(polygon, p1) < polygon.r + p1.r){
        valid = false;
      }
    }
    if(!valid){continue;}
    data.polygons.push(polygon);
  }
}

function drawPolygons(){
  data.ctx.clearRect(0, 0, data.canvasWidth, data.canvasHeight);
  data.polygons.forEach( polygon => polygon.draw(data) );
  // data.ctx.fillStyle = '#000000';
  // data.ctx.rect(0, 0, data.canvasWidth, data.canvasHeight);
  // data.ctx.fill();
  // debugger;
  for (var i = 0; i < data.polygons.length; i++) {
    let p1 = data.polygons[i];
    for (var j = i + 1; j < data.polygons.length; j++) {
      let p2 = data.polygons[j];
      if(util.distance(p1, p2) < p1.r + p2.r){
        Polygon.handleCollision(p1, p2);
      }
    }
  }
}

module.exports = {
  initialize: initialize
}
