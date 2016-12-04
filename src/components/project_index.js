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
    this.rotate = this.rotate.bind(this);
    // this.state = { idx: 0 };
  }

  rotate(){

  }

  componentDidMount(){
    // this.interval = setInterval(this.rotate, 3000);
  }

  componentWillUnmount(){
    // clearInterval(this.interval);
  }

  render() {
    const order = ['paratrooper', 'algoArena', 'eosRedux'];
    // const divOrder = {
    //   paratrooper: ['eosRedux', 'paratrooper', 'algoArena'],
    //   algoArena: ['paratrooper', 'algoArena', 'eosRedux'],
    //   eosRedux: ['algoArena', 'eosRedux', 'paratrooper']
    // }
    // let active = order[this.state.idx];
    // let arrangement = divOrder[active];
    return(
      <div className='project-index'>
        <div className='column'>
          <ProjectList projects={order} />
        </div>
        <div className='column'>
          <ProjectText projects={order.slice().reverse()} />
        </div>
      </div>
    );
  }
}
// <div className='project-selector' id='frontend' onClick={this.handleClick}>Front End</div>
// <div className='project-selector' id='backend' onClick={this.handleClick}>Back End</div>

const ProjectList = ({ projects }) => {
  const list = projects.map( (project, idx) => <ProjectDisplay project={project} place={idx} key={idx} /> );
  // console.log(components['eosRedux']);
  // debugger;
  return(
    <div className='project-list'>
      {list}
    </div>
  );
};

const ProjectText = ({ projects }) => {
  const list = projects.map( (project, idx) => <ProjectDescription project={project} place={idx} key={idx} /> );
  // console.log(components['eosRedux']);
  // debugger;
  return(
    <div className='project-list'>
      {list}
    </div>
  );
};
