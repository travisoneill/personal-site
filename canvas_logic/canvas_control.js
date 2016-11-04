import { initializeSplash, stopSplash } from './splash/canvas';
import { initializeFractal, stopFractal } from './fractal/fractal';

export default function initializeCanvasElements(){
  initializeSplash(document.getElementById('canvas'));
  initializeFractal(document.getElementById('fractal'));
  window.addEventListener('scroll', handleScroll);
}

const handleScroll = () => {
  let top = document.body.scrollTop;
  let height = window.innerHeight;
  let page = top / height;
  if(page < 0.5 || page > 3.5){ stopFractal(); }
  else{ initializeFractal(); }
  if(page > 1.5){ stopSplash(); }
  else{ initializeSplash(); }

  // console.log(top);
};
