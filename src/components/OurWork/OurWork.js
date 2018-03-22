import React, { Component } from "react"
import Nav from "../First/childComponents/Nav"
import InstallMethodBanner from "./childcomponents/InstallMethodBanner"
import InstallSecurityMiddle from "./childcomponents/InstallSecurityMiddle"
import InstallAutomation from './childcomponents/InstallAutomation'
import Aquaponics from './childcomponents/Aquaponics'

import "./ourwork.css"

class OurWork extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="owBackground ">
        <Nav />

        <div className="owBanner">
          <p style={{ fontWeight: "bold", fontSize: "2em" }}> OUR WORK</p>
        </div>

        <div className="owMidText">
          <p>
            EXPERIENCE OUR CLIENT-FIRST APPROACH AND UNMATCHED SECURITY AND
            AUTOMATION STANDARDS
          </p>
        </div>

        <InstallSecurityMiddle />

        <InstallMethodBanner />

        <InstallAutomation />

        <Aquaponics />
      </div>
    )
  }
}
export default OurWork
