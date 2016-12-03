'use strict';
import React from 'react';
import { ProjectIndex } from './project_index';
import { ButtonBar } from './button_bar';


export const Projects = () => {
  return(
    <div className='projects'>
      <div className='overlay'>
        <ButtonBar/>
        <ProjectIndex/>
      </div>
    </div>
  );
};
