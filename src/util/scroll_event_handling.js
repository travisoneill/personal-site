import { initializeSplash, stopSplash } from '../canvas_logic/splash/canvas';
import { initializeFractal, stopFractal } from '../canvas_logic/fractal/fractal';
import { Titlebar } from '../util/state';

//canvas entrypoint
export const initializeCanvasElements = () => {
  initializeSplash(document.getElementById('canvas'));
  initializeFractal(document.getElementById('fractal'));
}

export const initializeTitlebar = () => {
  Titlebar.element = document.querySelector('#titlebar');
}

//handling of scroll position
export const handleScroll = () => {
  let top = document.body.scrollTop;
  let height = window.innerHeight;
  let page = top / height;
  //choose which canvasses should render based on scroll height
  if(page < 0.5 || page > 3.5) { stopFractal(); }
  else { initializeFractal(); }
  if(page > 1.5) { stopSplash(); }
  else { initializeSplash(); }
  //handle titlebar positioning
  const titlebar = Titlebar.element;
  debugger;
  // console.log(page);
  // debugger;
  if( page > 0.94 && titlebar.className.match('floating')) {
    titlebar.className = 'titlebar fixed';
  }
  if(page < 0.94 && titlebar.className.match('fixed')) {
    titlebar.className = 'titlebar floating';
  }


};
