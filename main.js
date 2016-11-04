import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initializeCanvasElements from './canvas_logic/canvas_control';
import { App } from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  const entrypoint = document.getElementById('entrypoint');
  ReactDOM.render( <App/>, entrypoint );
  initializeCanvasElements();
});
