import React from 'react';


export const ButtonBar = () => {
  const handleClick = (event) => {
    console.log(event.target.id);
  }

  return(
    <div className='button-container'>
      <div className='project-selector' id='javascript' onClick={handleClick}>JavaScript</div>
      <div className='project-selector' id='ruby' onClick={handleClick}>Ruby/Rails</div>
      <div className='project-selector' id='python' onClick={handleClick}>Python</div>
      <div className='project-selector' id='react' onClick={handleClick}>React</div>
      <div className='project-selector' id='nodejs' onClick={handleClick}>Node.js</div>
      <div className='project-selector' id='opensource' onClick={handleClick}>Open Source</div>
    </div>
  )
};
