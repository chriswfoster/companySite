import React, { Component } from "react"
import Solar from './aquaponicschild/Solar'
import AquaFirst from './aquaponicschild/AquaFirst'


class Aquaponics extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#E2FDBA", height: "auto" }}>
        <h1>ATSA has gone green!</h1>
        <AquaFirst />
        <Solar />
        
      </div>
    )
  }
}
export default Aquaponics
