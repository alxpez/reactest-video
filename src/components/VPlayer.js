import React, { Component } from 'react';
import './VPlayer.css'
// eslint-disable-next-line
import dashjs from 'dashjs';



class IOSFallbackPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = { video: props.video }
  }

  render(){
    return (
      <a href="https://youtu.be/0HQqXllXpfQ">
        <div className="fallback-poster__wrapper"></div>
      </a>
    );
  }
}


class WebPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = { video: props.video }
  }

  render(){
    return <video data-dashjs-player src={this.state.video} controls></video>;
  }
}



class VPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: props.video,
      isIOS: !!navigator.platform.match(/iPhone|iPod|iPad/)
    }
  }

  render() {
    const isIOS = this.state.isIOS;

    let player = null
    if (isIOS) {
      player = <IOSFallbackPlayer video={this.state.video}/>;
    } else {
      player = <WebPlayer video={this.state.video}/>;
    }

    return (
      <div className="player-wrapper">{player}</div>
    );
  }
}

export default VPlayer;
