import React, { Component } from "react"
import "./components.css"

class First extends Component {
    constructor(){
        super()
        this.state ={
            data: []
        }
    }




  render() {
    return (
      <div className="generalHeight topBackground">
        <p> Ambience Total Security</p>
        <div>
        <p>Security Services</p>
        <p>Industry?</p>
        <p>ABOUT US</p>
        <p>Insights</p>
        <p>Our Work</p>
        <p>Contact Us</p>
        </div>
      </div>
    )
  }
}
export default First
