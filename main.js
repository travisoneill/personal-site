import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { initializeCanvasElements, initializeTitlebar, handleScroll } from './src/util/scroll_event_handling';
import { initializeClickElements, handleClick } from './src/util/click_event_handling';
import { App } from './src/components/app';

document.addEventListener('DOMContentLoaded', () => {
  const entrypoint = document.getElementById('entrypoint');
  ReactDOM.render( <App/>, entrypoint );
  window.addEventListener('scroll', handleScroll);
  initializeCanvasElements();
  initializeTitlebar();
  document.addEventListener('click', handleClick);
  initializeClickElements();
});
