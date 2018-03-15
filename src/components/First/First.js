import React, { Component } from "react"
import "../components.css"
import "../animate.css"
import FirstCarousel from './childComponents/FirstCarousel'

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
        <h1 style={{marginTop: "-1vh", color: "white", textAlign: "center"}}> Ambience Total Security</h1>
      <FirstCarousel />
        <div style={{color: "white"}}>
          <p className="firstAnimation flashFaderAnimation">SECURITY SERVICES</p>
          <p className="secondAnimation flashFaderAnimation">INDUSTRY</p>
          <p className="thirdAnimation flashFaderAnimation">ABOUT US</p>
          <p className="fourthAnimation flashFaderAnimation">INSIGHTS</p>
          <p className="fifthAnimation flashFaderAnimation">OUR WORK</p>
          <p className="sixthAnimation flashFaderAnimation">CONTACT US</p>
        </div>
      </div>
    )
  }
}
export default First
