import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initializeCanvasElements from './src/canvas_logic/canvas_control';
import { App } from './src/components/app';

document.addEventListener('DOMContentLoaded', () => {
  const entrypoint = document.getElementById('entrypoint');
  ReactDOM.render( <App/>, entrypoint );
  initializeCanvasElements();
});
