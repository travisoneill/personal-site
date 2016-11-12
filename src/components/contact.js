'use strict';
import React from 'react';

export const Contact = () => {
  return(
    <div className='contact'>
      <input type='text' placeholder='Email'/>
      <input type='name' placeholder='Name'/>
      <textarea placeholder='Your message...'/>
    </div>
  );
};
