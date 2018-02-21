import React, { Component } from 'react';
import Header from './components/Header'
import VPlayer from './components/VPlayer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <VPlayer video="https://dash.akamaized.net/dash264/TestCases/5a/1/manifest.mpd"></VPlayer>
      </div>
    );
  }
}

export default App;
