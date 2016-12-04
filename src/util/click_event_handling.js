import { Dropdown, ProjectPosition } from './state';

export const initializeClickElements = () => {
  Dropdown.element = document.querySelector('#dropdown');
  ProjectPosition.up = document.querySelectorAll('.project-container');
  ProjectPosition.down = document.querySelectorAll('.project-text');
}

const toggleVisible = (element) => {
  let className = element.className.replace(' hidden', '');
  if(className === element.className){ className += ' hidden'; }
  // debugger;
  element.className = className;
}

const hide = (element) => {
  if(!element.className.match('hidden')){
    element.className += ' hidden';
  }
}

const rotateClasses = (arr) => {
  let first = arr[0].className
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i].className = arr[i+1].className;
  }
  arr[arr.length-1].className = first;
}

const rotateProjectDisplay = () => {
  rotateClasses(ProjectPosition.up);
  rotateClasses(ProjectPosition.down);
}

export const handleClick = (event) => {
  const path = event.path.map(n => n.id);
  const target = event.target.id;
  const dropdown = Dropdown.element;

  //handle dropdown menu
  if (path.includes('nav-svg')) { toggleVisible(dropdown); }
  else if (!path.includes('dropdown')) { hide(dropdown); }

  //rotate project display
  if (path.includes('rotate-projects')) { rotateProjectDisplay(); }

}
