import * as util from '../util';
import Fractal from './fractal_class';
import { FractalData } from '../constants';

const data = FractalData;

export function initializeFractal(canvasEl){
  window.addEventListener('resize', resizeCanvas, false);
  data.canvas = canvasEl;
  data.ctx = canvasEl.getContext('2d');
  data.fractal = new Fractal();
  resizeCanvas();
  // canvasEl.addEventListener('mousemove', mouseMove, false);
}

function resizeCanvas(event){
  const oldInterval = data.interval;
  data.canvasHeight = window.innerHeight;
  data.canvasWidth = window.innerWidth;
  data.canvas.height = data.canvasHeight;
  data.canvas.width = data.canvasWidth;
  data.interval = setInterval(drawFractal, 1);
  if(oldInterval){clearInterval(oldInterval);}
}

function drawFractal(){
  data.fractal.draw(data);
}
