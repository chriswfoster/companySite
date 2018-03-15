import React, { Component } from "react"

import Particles from "react-particles-js"

class cmp extends Component {
  render() {
    return (
      <div className="generalHeight secondBackground">
        <Particles
          params={{
            particles: {
              color: {
                value: "#0019ff"
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 5.891476416322726,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                width: 2.683101981549727,
                shadow: {
                  enable: true,
                  color: "#0019ff",
                  opacity: 1,
                  blur: 0
                }
              }
            }
          }}
          style={{
            width: "80%",
            backgroundColor: "black",
            position: "absolute",
            zIndex: "-3"
          }}
        />
        <div className="secondFlex1">
          <p style={{ fontSize: "2em", color: "white" }}>
            Remote security and automation controls.
          </p>
          <p style={{fontSize: "1em", color: "white", marginTop: "-1%" }}>A smarter home/office, is a safer home/office</p>
          <div className="secondFlex2">
            <img
              className="secondImage"
              src={require("./images/image_1_26.png")}
            />
            <div className="secondTextBlock">
              <p style={{ fontSize: "2em" }}>FEATURES:</p>
              <ul>
                <li>
                  <p>Wide Range of Compatible Devices</p>
                </li>
                <li>
                  <p>
                    Cameras, locks, smoke detectors, window/door sensors,
                    electronic lockbox, and alarm system are controlled by just
                    one application.
                  </p>
                </li>
                <li>
                  <p>
                    App manages sensor location by each individusal specific
                    location in home or building.
                  </p>
                </li>
                <li>
                  <p>
                    Safety records, indexes of consumption, graphs and
                    statistics stored in our secure database.
                  </p>
                </li>
                <li>
                  <p>
                    Manage all of your connected devices in one place - the palm
                    of your hand!
                  </p>
                </li>
                <li>
                  <p>Product support also available.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default cmp
