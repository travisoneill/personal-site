import React from 'react';
import { Nav } from './svg';
import { Dropdown } from './dropdown';

export const NavIcon = () => {
  return(
    <div className='nav-icon' id='nav-icon'>
      <Nav/>
      <Dropdown/>
    </div>
  )
};

// export class NavIcon
