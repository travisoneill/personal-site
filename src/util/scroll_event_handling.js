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
  Titlebar.animation = Titlebar.element.querySelector('#name-animation');
}

const initializeNameAnimation = () => {
  const text = 'TRAVISONEILL';
  let count = 0;

  const step = () => {
    if(count === text.length){
      clearInterval(Titlebar.interval);
      Titlebar.interval = null;
    }
    Titlebar.animation.innerHTML = text.slice(0, count);
    count++;
  }

  Titlebar.interval = setInterval(step, 100);
}

const stopNameAnimation = () => {
  clearInterval(Titlebar.interval);
  Titlebar.interval = null;
  Titlebar.animation.innerHTML = '';
}


//handling of scroll position
export const handleScroll = () => {
  let top = document.body.scrollTop;
  let height = window.innerHeight;
  let page = top / height;
  //choose which canvasses should render based on scroll height
  if(page < 0.2 || page > 3.5) { stopFractal(); }
  else { initializeFractal(); }
  if(page > 1.2) { stopSplash(); }
  else { initializeSplash(); }
  //handle titlebar positioning and name animation
  const titlebar = Titlebar.element;
  if( page > 1 && titlebar.className.match('floating')) {
    titlebar.className = 'titlebar fixed';
    initializeNameAnimation();
  }
  if(page < 1 && titlebar.className.match('fixed')) {
    titlebar.className = 'titlebar floating';
    stopNameAnimation();
  }
};
