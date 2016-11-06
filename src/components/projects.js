'use strict';
import React from 'react';
import { ProjectIndex } from './project_index';

export const Projects = () => {
  return(
    <div className='projects'>
      <canvas id='fractal'/>
      <ProjectIndex />
    </div>
  );
};
