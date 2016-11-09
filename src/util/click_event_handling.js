import { Dropdown } from './state';

export const initializeClickElements = () => {
  Dropdown.element = document.querySelector('#dropdown');
}

const toggleVisible = (element) => {
  let className = element.className.replace(' hidden', '');
  if(className === element.className){ className += ' hidden'; }
  debugger;
  element.className = className;
}

const hide = (element) => {
  if(!element.className.match('hidden')){
    element.className += ' hidden';
  }
}

export const handleClick = (event) => {
  console.log(event.target);
  const element = event.target.id;
  const dropdown = Dropdown.element;
  //handle dropdown menu
  debugger;
  if (element === 'nav-icon'){ toggleVisible(dropdown); }
  else if (element !== 'dropdown') { hide(dropdown) }
}
