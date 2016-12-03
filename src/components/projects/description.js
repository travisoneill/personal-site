import React, { Component } from 'react';
import { urls } from '../../util/images';

export class ProjectDescription extends Component {
  constructor(props) {
    super(props);
    // this.state = { idx: 0 };
    // this.updateImage = this.updateImage.bind(this);
    // this.pause = this.pause.bind(this);
    // this.restart = this.restart.bind(this);
    // this.urls = urls[this.props.project];
    // this.paused = false;
  }

  // componentDidMount(){
  //   this.interval = setInterval(this.updateImage, 2000);
  // }
  //
  // componentWillUnmount(){
  //   clearInterval(this.interval);
  // }
  //
  // updateImage(){
  //   if(this.paused){ return; }
  //   let idx = this.state.idx;
  //   idx++;
  //   idx %= this.urls.length;
  //   this.setState({idx: idx});
  // }

  // pause(event){
  //   event.preventDefault();
  //   this.paused = true;
  // }
  //
  // restart(event){
  //   event.preventDefault();
  //   this.paused = false;
  // }

  render(){
    return(
      <div className={`project-container ${this.props.project}`}>
        <div>{this.props.project}</div>
      </div>
    );
  }
}
