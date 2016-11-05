'use strict';
export const Splash = {
  canvas: null,
  ctx: null,
  canvasHeight: null,
  canvasWidth: null,
  points: [],
  polygons: [],
  interval: null,
  listener: null,
  mousePos: {x: null, y: null},
  mouseHist: [],
  mouseV: null,
  mouse: {x: null, y: null},
  running: false
};

export const FractalData = {
  canvas: null,
  ctx: null,
  canvasHeight: null,
  canvasWidth: null,
  interval: null,
  fractal: null,
  listener: null,
  running: false
};
