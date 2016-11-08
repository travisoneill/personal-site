import React, { Component } from 'react';
import { urls } from '../../util/images';

export class AlgoArena extends Component {
  constructor(props) {
    super(props);
    this.state = { idx: 0 };
    this.updateImage = this.updateImage.bind(this);
    this.urls = urls.algoArena;
  }

  componentDidMount(){
    this.interval = setInterval(this.updateImage, 2000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  updateImage(){
    let idx = this.state.idx;
    idx++;
    idx %= this.urls.length;
    this.setState({idx: idx});
  }

  render(){
    return(
      <div className='project-container algo-arena'>
        <img className='project-image algo-arena' src={this.urls[this.state.idx]} alt='Algo Arena Screenshot' />
      </div>
    );
  }
}
