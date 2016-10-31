import Polygon from './polygon_class';
import * as data from './constants';

function initialize(canvasEl){
  window.addEventListener('resize', resizeCanvas, false);
  data.canvas = canvasEl;
  data.ctx = canvasEl.getContext('2d');
  // randomPolygons(10);
  randomPolygons(10);
  resizeCanvas();
}

function resizeCanvas(event){
  data.canvasHeight = window.innerHeight;
  data.canvasWidth = window.innerWidth;
  data.canvas.height = data.canvasHeight;
  data.canvas.width = data.canvasWidth;
  setInterval(drawPolygons, 100);
}

function randomPolygons(n){
  for (var i = 0; i < n; i++){
    const params = {
      x: Math.random() * .9 + .05,
      y: Math.random() * .9 + .05,
      r: data.randInt(50, 25),
      n: data.randInt(8, 3)
    }
    data.polygons.push(new Polygon(params));
  }
}

function drawPolygons(){
  data.ctx.fillStyle = '#000000';
  data.ctx.rect(0, 0, data.canvasWidth, data.canvasHeight);
  data.ctx.fill();
  data.polygons.forEach( polygon => polygon.draw(data) );
}

module.exports = {
  initialize: initialize
}
