'use strict';
import React, { Component } from 'react';
import { Title } from './title';
import { IconBar } from './iconbar'

export const Canvas = () => {
  return(
    <div className='splash'>
      <canvas id='canvas'/>
      <Title/>
      <IconBar/>
    </div>
  );
};
