import React, { Component } from 'react';
import { Github, Linkedin } from './svg';

export const IconBar = () => {
  return(
    <div className='icon-bar'>
      <Github/>
      <Linkedin/>
    </div>
  );
};
