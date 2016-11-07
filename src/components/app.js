'use strict';
import React from 'react';

import { Canvas } from './canvas';
import { About } from './about';
import { Projects } from './projects';
import { Skills } from './skills';
import { Contact } from './contact';
import { NavIcon } from './nav_icon';

export const App = () => {
  return(
    <div className='app-container'>
      <NavIcon/>
      <Canvas/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
};
