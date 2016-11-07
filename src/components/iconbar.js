'use strict';
import React, { Component } from 'react';
import { Github, Linkedin, AngelList} from './svg';

export const IconBar = () => {
  return(
    <div className='icon-bar'>
      <Github/>
      <Linkedin/>
      <AngelList/>
    </div>
  );
};
