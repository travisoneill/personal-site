import React from 'react';
import { Canvas } from './canvas';
import { Title } from './title';

export const App = () => {
  return(
    <div className='app-container'>
      <Canvas/>
      <Title/>
    </div>
  );
};
