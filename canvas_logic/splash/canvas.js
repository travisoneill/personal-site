import Polygon from './polygon_class';
import * as data from './constants';
import * as util from './util';

function initialize(canvasEl){
  window.addEventListener('resize', resizeCanvas, false);
  data.canvas = canvasEl;
  data.ctx = canvasEl.getContext('2d');
  canvasEl.addEventListener('mousemove', mouseMove, false);
  for (var i = 0; i < 10; i++) { data.mouseHist.push({x: 0, y: 0});}
  randomPolygons(10);
  resizeCanvas();
}

function mouseMove(event){
  let mouse = {
    x: event.layerX / data.canvasWidth,
    y: event.layerY / data.canvasHeight
  };
  if(!data.mouse){
    data.mouse = new Polygon({
      x: mouse.x,
      y: mouse.y,
      r: 40,
      n: 8
    });
    data.polygons.push(data.mouse);
  }
  data.mouseHist.unshift(mouse);
  if(data.mouseHist.length > 10){data.mouseHist.pop();}
  data.mouseV = util.distance(data.mouseHist[0], data.mouseHist[9]);
  // console.log(data.mouseV);
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
  // let mouseData = {
  //   x: data.mouseHist[0].x,
  //   y: data.mouseHist[0].y,
  //   r: 50,
  //   n: 3
  // }
  // let mouse = new Polygon(mouseData)
  // debugger;
  data.mouse.x = data.mouseHist[0].x;
  data.mouse.y = data.mouseHist[0].y;
  data.mouse.vx = (data.mouseHist[0].x - data.mouseHist[9].x) * data.canvasWidth / 10;
  data.mouse.vy = (data.mouseHist[0].y - data.mouseHist[9].y) * data.canvasHeight / 10;
  // console.log(mouse.vx, mouse.vy)
  // data.polygons.push(mouse);
  handleCollisions();
  // data.polygons.pop();
}

function handleCollisions(){
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
