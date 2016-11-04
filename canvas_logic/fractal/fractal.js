import { Fractal } from '../constants';
import * as util from '../util';

const data = Fractal;

export function initializeFractal(canvasEl){
  window.addEventListener('resize', resizeCanvas, false);
  data.canvas = canvasEl;
  data.ctx = canvasEl.getContext('2d');
  resizeCanvas();
  // canvasEl.addEventListener('mousemove', mouseMove, false);
}

function resizeCanvas(event){
  const oldInterval = data.interval;
  data.canvasHeight = window.innerHeight;
  data.canvasWidth = window.innerWidth;
  data.canvas.height = data.canvasHeight;
  data.canvas.width = data.canvasWidth;
  // data.interval = setInterval(drawPolygons, 50);
  // if(oldInterval){clearInterval(oldInterval);}
}
