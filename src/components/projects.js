'use strict';
import React from 'react';
import { ProjectIndex } from './project_index';
import { AlgoArena } from './projects/algorithm_arena';

export const Projects = () => {
  return(
    <div className='projects'>
      <canvas id='fractal'/>
      <ProjectIndex />
    </div>
  );
};


// <AlgoArena />
