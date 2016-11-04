import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { initializeSplash } from './canvas_logic/splash/canvas';
import { initializeFractal } from './canvas_logic/fractal/fractal';

document.addEventListener('DOMContentLoaded', () => {
  const entrypoint = document.getElementById('entrypoint');
  ReactDOM.render( <App/>, entrypoint );
  initializeSplash(document.getElementById('canvas'));
  initializeFractal(document.getElementById('fractal'));
});
