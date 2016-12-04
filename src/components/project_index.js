'use strict';
import React, { Component } from 'react';
// import { AlgoArena } from './projects/algo_arena';
// import { Paratrooper } from './projects/paratrooper';
// import { EosRedux } from './projects/eos_redux';
import { ProjectDisplay } from './projects/index';
import { ProjectDescription } from './projects/description';
// import { ProjectPosition } from '../util/state';

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
  }

  render() {
    const order = ['paratrooper', 'algoArena', 'eosRedux'];
    return(
      <div className='project-index'>
        <div className='column'>
          <ProjectList projects={order} />
        </div>
        <div className='column'>
          <ProjectText projects={order} />
        </div>
      </div>
    );
  }
}

const ProjectList = ({ projects }) => {
  const list = projects.map( (project, idx) => <ProjectDisplay project={project} place={idx} key={idx} /> );
  return(
    <div className='project-list'>
      {list}
    </div>
  );
};

const ProjectText = ({ projects }) => {
  const list = projects.map( (project, idx) => <ProjectDescription project={project} place={idx} key={idx} /> );
  return(
    <div className='project-list'>
      {list}
    </div>
  );
};
