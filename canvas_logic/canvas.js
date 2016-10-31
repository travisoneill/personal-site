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
  for (var i = 0; i < n; i++){
    const params = {
      x: Math.random() * .9 + .05,
      y: Math.random() * .9 + .05,
      r: util.randInt(50, 25),
      n: util.randInt(8, 3)
    }
    data.polygons.push(new Polygon(params));
  }
}

function drawPolygons(){
  data.ctx.clearRect(0, 0, data.canvasWidth, data.canvasHeight);
  // data.ctx.fillStyle = '#000000';
  // data.ctx.rect(0, 0, data.canvasWidth, data.canvasHeight);
  // data.ctx.fill();
  data.polygons.forEach( polygon => polygon.draw(data) );
}

module.exports = {
  initialize: initialize
}
