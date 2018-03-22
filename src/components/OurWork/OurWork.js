import React, { Component } from "react"
import Nav from "../First/childComponents/Nav"

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

        <div className="firstBottom">
          <img
            src={require("../images/installing1.jpg")}
            className="owInstaller"
          />
          <div className="firstBottomColumnFlex">
            <p style={{ fontSize: "2em", color: "white", marginTop: "0%" }}>
              Installation:
            </p>
            <p>We offer affordable installation at competitive rates. </p>
            <p>
              Our security systems are installed by the leading professionals in
              the business. Security systems will be installed in an
              unpredictable fashion, giving your security the edge against
              crime. We offer additional DVR protection, as well as reinforced
              cabling or wireless packages. Cameras will be placed high, under
              shelter, away from blinding light, obstruction-free, cables
              protected, and in obvious places (because an obvious camera can
              ofter deter wrong doing).
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

        <div className="bannerFlex" style={{margin: "2vw", padding: "1vw"}}>
          <div className="carouselBackground">
            <img
              className="carouselImages firstCarouselImage"
              src={require("../First/childComponents/carouselimages/MPX analog wiring system.png")}
            />

            <img
              className="carouselImages secondCarouselImage"
              src={require("../First/childComponents/carouselimages/Power over ethernet.png")}
            />

            <img
              className="carouselImages thirdCarouselImage"
              src={require("../First/childComponents/carouselimages/Wireless security system.png")}
            />
            <img
              className="carouselImages fourthCarouselImage"
              style={{ borderRadius: "12px" }}
              src={require("../First/childComponents/carouselimages/schema.png")}
            />
          </div>

          <p
            style={{ marginTop: "0vh", color: "white", textAlign: "center", textSize:"1em", width: "40vw" }}>
            We offer multiple security and hardware installation options. We can provide custom installations tailored around the customer's need. Our Installation Professionals fine-tune the security equipment for maximum performance and efficiency.</p>
        </div>
      </div>
    )
  }
}
export default OurWork
