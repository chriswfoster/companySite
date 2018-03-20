import React, { Component } from "react"
import Nav from '../First/childComponents/Nav'


class OurWork extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
          <Nav />
        <div>
          <p style={{ fontSize: "2em", color: "white", marginTop: "0%" }}>
            Installation:
          </p>
          <p>We offer affordable installation at competitive rates. </p>

          <p>
            Our security systems are installed by the leading professionals in
            the business. Security systems will be installed in an unpredictable
            fashion, giving your security the edge against crime. We offer
            additional DVR protection, as well as reinforced cabling or wireless
            packages. Cameras will be placed high, under shelter, away from
            blinding light, obstruction-free, cables protected, and in obvious
            places (because an obvious camera can ofter deter wrong doing).
          </p>
          <br />
          <p>
            Using the latest hardware, programming languages, and technology,
            we're able to provide you with a home you can control from almost
            anywhere in the world! What's better than that? We also provide
            installation, and we have 24/7 call support as well as online chat
            support (subscription rates may apply).
          </p>
        </div>
      </div>
    )
  }
}
export default OurWork
