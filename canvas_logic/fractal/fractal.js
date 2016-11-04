'use strict';
import * as util from '../util';
import Fractal from './fractal_class';
import { FractalData } from '../constants';

const data = FractalData;

export function initializeFractal(canvasEl){
  if(data.running){ return; }
  data.listener = window.addEventListener('resize', resizeCanvas, false);
  data.canvas = canvasEl || data.canvas;
  data.ctx = data.canvas.getContext('2d');
  data.fractal = new Fractal();
  data.running = true;
  resizeCanvas();
  // canvasEl.addEventListener('mousemove', mouseMove, false);
}

export function stopFractal(){
  if(!data.running){ return; }
  if(data.interval){ clearInterval(data.interval); }
  data.interval = null;
  data.fractal = null;
  window.removeEventListener('resize', resizeCanvas, false);
  data.listener = null;
  data.running = false;
}

function resizeCanvas(event){
  const oldInterval = data.interval;
  data.canvasHeight = window.innerHeight;
  data.canvasWidth = window.innerWidth;
  data.canvas.height = data.canvasHeight;
  data.canvas.width = data.canvasWidth;
  data.interval = setInterval(drawFractal, 0);
  if(oldInterval){clearInterval(oldInterval);}
}


function drawFractal(){
  data.fractal.draw(data);
}
