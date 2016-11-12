'use strict';
import React, { Component } from 'react';

export class Contact extends Component {
  constructor(props){
    super(props);
    this.formData = { name: '', phone: '', email: '', body: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = { body: '', phone: '', email: '' };
  }

  sanitize(obj) {
    const removeHTML = html => html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safe = {}
    for(var key in obj) {
      let value = obj[key];
      safe[key] = removeHTML(value);
    }
    if(safe.phone){ safe.phone = safe.phone.replace(/\D/g, ''); }
    return safe;
  }

  validate({ name, phone, email, body }) {
    let valid = true;
    const fields = { email: '', phone: '', body: '' };
    if(phone && phone.replace(/\D/g, '').length !== 10) {
      valid = false;
      fields.phone = 'invalid';
    }
    if(!email.match(/^\w[A-Za-z0-9._%+-]+@\w[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/)){
      valid = false;
      fields.email = 'invalid';
    }
    if(!body){
      valid = false;
      fields.body = 'invalid';
    }
    return { valid: valid, fields: fields };
  }

  handleInput(event) {
    event.preventDefault();
    const id = event.target.id;
    const value = event.target.value;
    this.formData[id] = value;
  }

  handleSubmit(event) {
    event.preventDefault();
    const check = this.validate(this.formData);
    if(check.valid){
      console.log(this.sanitize(this.formData));
    } else {
      this.setState(check.fields);
    }
  }

  render(){
    return(
      <div className='contact' id='contact'>
        <div className='contact-upper'>
          <input className={`contact-field`} id='name' onChange={this.handleInput} type='text' placeholder='name'/>
          <input className={`contact-field ${this.state.email}`} id='email' onChange={this.handleInput} type='text' placeholder='email'/>
          <input className={`contact-field ${this.state.phone}`} id='phone' onChange={this.handleInput} type='text' placeholder='phone'/>
        </div>
        <div className='contact-lower'>
          <textarea className={`contact-body ${this.state.body}`} id='body' onChange={this.handleInput} placeholder='message'/>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
