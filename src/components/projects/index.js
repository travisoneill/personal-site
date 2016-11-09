import React, { Component } from 'react';
import { urls } from '../../util/images';

export class ProjectDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { idx: 0 };
    this.updateImage = this.updateImage.bind(this);
    this.urls = urls[this.props.project];
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
      <div className={`project-container ${this.props.project}`}>
        <div><img className={`project-image ${this.props.project}`} src={this.urls[this.state.idx]} alt='Algo Arena Screenshot' /></div>
      </div>
    );
  }
}
