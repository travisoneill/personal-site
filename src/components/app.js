'use strict';
import React from 'react';
import { Canvas } from './canvas';
import { Projects } from './projects';
import { Fractal } from './fractal';
import { Skills } from './skills';
import { Contact } from './contact';
import { NavIcon } from './nav_icon';
import { Titlebar } from './titlebar';
import { OpenSource } from './open_source';

export const App = () => {
  return(
    <div className='app-container'>
      <NavIcon/>
      <Titlebar/>
      <Canvas/>
      <Projects/>
      <OpenSource/>
      <Fractal/>
      <Skills/>
      <Contact/>
    </div>
  );
};
