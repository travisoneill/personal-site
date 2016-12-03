'use strict';
import React from 'react';
import { ProjectIndex } from './project_index';


export const Projects = () => {
  return(
    <div className='projects'>
      <div className='overlay'></div>
      <ProjectIndex/>
    </div>
  );
};
