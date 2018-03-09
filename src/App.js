import React, { Component } from 'react';
import logo from './logo.svg';
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="appheight">
        <First />
        <Second />
        <Third />
        <Fourth />
        
      </div>
    );
  }
}

export default App;
