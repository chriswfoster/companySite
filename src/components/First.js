import React, { Component } from "react"
import "./components.css"
import "./animate.css"

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
        <p> Ambience Total Security</p>
        <div>
          <p className="firstAnimation">Security Services</p>
          <p className="secondAnimation">Industry?</p>
          <p className="thirdAnimation">ABOUT US</p>
          <p className="fourthAnimation">Insights</p>
          <p className="fifthAnimation">Our Work</p>
          <p className="sixthAnimation">Contact Us</p>
        </div>
      </div>
    )
  }
}
export default First
