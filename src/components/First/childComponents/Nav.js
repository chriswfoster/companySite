import React, { Component } from "react"
import { Link } from "react-router-dom"
class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navFlex">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p className="firstAnimation flashFaderAnimation">
              SECURITY SERVICES
            </p>
          </Link>
          <p className="secondAnimation flashFaderAnimation">INDUSTRY</p>
          <p className="thirdAnimation flashFaderAnimation">ABOUT US</p>
          <p className="fourthAnimation flashFaderAnimation">INSIGHTS</p>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/ourwork"
          >
            <p className="fifthAnimation flashFaderAnimation">OUR WORK</p>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className="sixthAnimation flashFaderAnimation">CONTACT US</p>
          </Link>
        </div>
      </div>
    )
  }
}
export default Nav
