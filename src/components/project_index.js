'use strict';
import React from 'react';

export const ProjectIndex = () => {
  const keywords = {
    paratrooper: ['javascript', 'frontend', 'canvas', 'game'],
    algoArena: ['backend', 'frontend', 'python', 'ruby', 'react', 'flask', 'javascript', 'nodejs'],
    eosRedux: ['backend', 'javascript', 'opensource', 'nodejs', 'python', 'flask', 'nodejs'],
    devbook: ['backend', 'frontend', 'rails', 'ruby', 'javascript', 'react', 'sql'],
    rails: ['opensource', 'ruby', 'rails', 'backend', 'sql'],
    gcp: ['opensource', 'python', 'flask'],
    uberSlack: ['ruby', 'rails', 'opensource'],
    briansGuitar: ['javascript', 'react', 'frontend', 'redux']
  };

  const selected = [];

  const handleClick = (event) => {
    event.preventDefault();
    console.log('CLICK');
  }

  return(
    <div className='project-index'>
      <div className='button-container'>
        <button className='project-selector' id='javascript' onClick={handleClick}>JavaScript</button>
        <button className='project-selector' id='ruby' onClick={handleClick}>Ruby/Rails</button>
        <button className='project-selector' id='python' onClick={handleClick}>Python</button>
        <button className='project-selector' id='frontend' onClick={handleClick}>Front End</button>
        <button className='project-selector' id='backend' onClick={handleClick}>Back End</button>
        <button className='project-selector' id='opensource' onClick={handleClick}>Open Source</button>
        <button className='project-selector' id='react' onClick={handleClick}>React</button>
        <button className='project-selector' id='nodejs' onClick={handleClick}>Node.js</button>
      </div>
      <ProjectList projects='selected' />
    </div>
  );
};

const ProjectList = ({a, b, c}) => {
  return(
    <div>PROJECT LIST</div>
  );
};
