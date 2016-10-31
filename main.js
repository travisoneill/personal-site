import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as canvas from './canvas_logic/canvas';

const Canvas = () => {
  return <div><canvas id='canvas'></canvas></div>
}

document.addEventListener('DOMContentLoaded', () => {
  const entrypoint = document.getElementById('entrypoint');
  ReactDOM.render(<Canvas/>, entrypoint);
  canvas.initialize(document.getElementById('canvas'));
});
