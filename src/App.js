import React, { Component } from 'react';
import logo from './logo.svg';
import First from './components/First/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state ={
    
  }
}




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
