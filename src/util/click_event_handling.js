import { Dropdown } from './state';

export const initializeClickElements = () => {
  Dropdown.element = document.querySelector('#dropdown');
}

export const handleClick = (event) => {
  console.log(event.target);
}
