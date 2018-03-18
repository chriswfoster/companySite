import React, { Component } from "react"
import { GoogleMap, Marker } from "react-google-maps"

import FirstCarousel from './childComponents/FirstCarousel'
import Nav from './childComponents/Nav'

import "../components.css"
import "../animate.css"


class First extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    return (
          <div className="generalHeight topBackground">
      <Nav />
        <div className = "bannerFlex">
        <FirstCarousel />
        <h1 style={{marginTop: "0vh", color: "white", textAlign: "center"}}> Ambience Total Security</h1>
          <img src={require('../images/topbannerpic.png')} style={{borderRadius: "25px", height: "36vh"}}/>
          </div>
        
        


      </div>
    )
  }
}
export default First
