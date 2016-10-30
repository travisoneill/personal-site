import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Canvas = () => {
  return <div><canvas id='canvas'></canvas></div>
}

document.addEventListener('DOMContentLoaded', () => {
  const entrypoint = document.getElementById('entrypoint');
  ReactDOM.render(<Canvas/>, entrypoint);
});
