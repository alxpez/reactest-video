import React, { Component } from 'react';
import Header from './components/Header'
import VPlayer from './components/VPlayer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <VPlayer video="https://s3.amazonaws.com/_bc_dml/example-content/sintel_dash/sintel_vod.mpd"></VPlayer>
      </div>
    );
  }
}

export default App;
