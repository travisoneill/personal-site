'use strict';
import React, { Component } from 'react';
import { AlgoArena } from './projects/algo_arena';
import { Paratrooper } from './projects/paratrooper';
import { EosRedux } from './projects/eos_redux';

const keywords = {
  paratrooper: ['javascript', 'frontend', 'canvas', 'game'],
  algoArena: ['backend', 'frontend', 'python', 'ruby', 'react', 'flask', 'javascript', 'nodejs'],
  eosRedux: ['backend', 'javascript', 'opensource', 'nodejs', 'python', 'flask', 'nodejs'],
  devbook: ['backend', 'frontend', 'rails', 'ruby', 'javascript', 'react', 'sql'],
  rails: ['opensource', 'ruby', 'rails', 'backend', 'sql'],
  gcp: ['opensource', 'python', 'flask', 'nodejs', 'javascript'],
  uberSlack: ['ruby', 'rails', 'opensource'],
  briansGuitar: ['javascript', 'react', 'frontend', 'redux']
};

export class ProjectIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: ['paratrooper', 'algoArena', 'eosRedux'] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // event.preventDefault();
    // let category = event.target.id
    // let temp = [];
    // let selected = this.state.selected.slice();
    // for (var i = 0; i < selected.length; i++) {
    //   if(selected[i] !== category){ temp.push(selected[i]); }
    // }
    // if(selected.length === temp.length){ temp.push(category); }
    // this.setState({selected: temp});
  }

  mapper(name){

  }

  render() {
    return(
      <div className='project-index'>
        <div className='button-container'>
          <div className='project-selector' id='javascript' onClick={this.handleClick}>JavaScript</div>
          <div className='project-selector' id='ruby' onClick={this.handleClick}>Ruby/Rails</div>
          <div className='project-selector' id='python' onClick={this.handleClick}>Python</div>
          <div className='project-selector' id='react' onClick={this.handleClick}>React</div>
          <div className='project-selector' id='nodejs' onClick={this.handleClick}>Node.js</div>
          <div className='project-selector' id='opensource' onClick={this.handleClick}>Open Source</div>
        </div>
        <ProjectList projects={this.state.selected} />
      </div>
    );
  }
}
// <div className='project-selector' id='frontend' onClick={this.handleClick}>Front End</div>
// <div className='project-selector' id='backend' onClick={this.handleClick}>Back End</div>

const ProjectList = ({ projects }) => {
  const components = {
    algoArena: AlgoArena,
    eosRedux: EosRedux,
    paratrooper: Paratrooper
  };
  // const list = projects.map( project => components[project] );
  // console.log(components['eosRedux']);
  debugger;
  return(
    <div className='project-list'>
      <AlgoArena/>
      <Paratrooper/>
      <EosRedux/>
    </div>
  );
};
