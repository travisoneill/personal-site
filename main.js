import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import * as canvas from './canvas_logic/splash/canvas';

document.addEventListener('DOMContentLoaded', () => {
  const entrypoint = document.getElementById('entrypoint');
  ReactDOM.render( <App/>, entrypoint );
  canvas.initialize(document.getElementById('canvas'));
});
