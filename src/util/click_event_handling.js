import { Dropdown } from './state';

export const initializeClickElements = () => {
  Dropdown.element = document.querySelector('#dropdown');
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

export const handleClick = (event) => {
  // console.log(elem);
  const path = event.path.map(n => n.id);
  const target = event.target.id;
  const dropdown = Dropdown.element;
  //handle dropdown menu
  // debugger;
  if (path.includes('nav-svg')) { toggleVisible(dropdown); }
  else if (!path.includes('dropdown')) { hide(dropdown); }
}
