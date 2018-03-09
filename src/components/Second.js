import React, { Component } from "react"

class cmp extends Component {
  render() {
    return (
      <div className="generalHeight secondBackground">
        <div className="secondFlex2">
          <img
            className="secondImage"
            src={require("./images/image_1_26.png")}
          />
          <div className="secondTextBlock">
            <h1>FEATURES:</h1>
            <ul>
              <li>
                <h3>Wide Range of Compatible Devices</h3>
              </li>
              <li>
                <h3>
                  Cameras, locks, smoke detectors, window/door sensors,
                  electronic lockbox, and alarm system are controlled by just
                  one application.
                </h3>
              </li>
              <li>
                <h3>
                  App manages sensor location by each individusal specific
                  location in home or building.
                </h3>
              </li>
              <li>
                <h3>
                  Safety records, indexes of consumption, graphs and statistics
                  stored in our secure database.
                </h3>
              </li>
              <li>
                <h3>
                  Manage all of your connected devices in one place - the palm
                  of your hand!
                </h3>
              </li>
              <li>
                <h3>Product support also available.</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default cmp
