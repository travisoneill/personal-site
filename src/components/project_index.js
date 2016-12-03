'use strict';
import React, { Component } from 'react';
// import { AlgoArena } from './projects/algo_arena';
// import { Paratrooper } from './projects/paratrooper';
// import { EosRedux } from './projects/eos_redux';
import { ProjectDisplay } from './projects/index';

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
  }

  render() {
    return(
      <div className='project-index'>
        <ProjectList projects={this.state.selected} />
      </div>
    );
  }
}
// <div className='project-selector' id='frontend' onClick={this.handleClick}>Front End</div>
// <div className='project-selector' id='backend' onClick={this.handleClick}>Back End</div>

const ProjectList = ({ projects }) => {
  const list = projects.map( (project, idx) => <ProjectDisplay project={project} key={idx} /> );
  // console.log(components['eosRedux']);
  // debugger;
  return(
    <div className='project-list'>
      {list}
    </div>
  );
};
