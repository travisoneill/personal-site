import React from 'react';
import { Canvas } from './canvas';
import { Skills } from './skills';
import { Projects } from './projects';
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
