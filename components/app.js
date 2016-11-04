'use strict';
import React from 'react';

import { Canvas } from './canvas';
import { About } from './about';
import { Projects } from './projects';
import { Skills } from './skills';
import { Contact } from './contact';

export const App = () => {
  return(
    <div className='app-container'>
      <Canvas/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
};
