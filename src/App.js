import React, { Component } from 'react';
import logo from './logo.svg';
import Top from './components/Top'
import Second from './components/Second'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <First />
        <Second />
      </div>
    );
  }
}

export default App;
