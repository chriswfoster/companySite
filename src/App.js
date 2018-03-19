import React, { Component } from 'react';
import logo from './logo.svg';
import router from './router'

import './App.css';

class App extends Component {


// HOME.JS IS HOME PAGE ("/")


  render() {
    return (
      <div>
        {router}
        </div>
    );
  }
}

export default App;
