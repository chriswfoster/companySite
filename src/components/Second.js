import React, { Component } from "react"

class cmp extends Component {
  render() {
    return (
      <div className="generalHeight secondBackground">
        <div className="secondFlex1">
          <p style={{ marginBottom: "5%", fontSize: "2em", color: "white" }}>
            A smarter home/office, is a safer home/office
          </p>
          <div className="secondFlex2">
            <img
              className="secondImage"
              src={require("./images/image_1_26.png")}
            />
            <div className="secondTextBlock">
              <p style={{fontSize:"2em"}}>FEATURES:</p>
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
