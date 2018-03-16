import React, { Component } from "react"
import { Carousel } from "react-responsive-carousel"

import "./first.css"
class FirstCarousel extends Component {
  constructor() {
    super()
    this.state = {
      slideIndex: 0
    }
  }

  slideHandler(slideIndex) {
    this.state.slideIndex === 2
      ? this.changeInterval()
      : this.setState({ slideIndex })
  }
  changeInterval() {
    let that = this
    setTimeout(function() {
      that.setState({ slideIndex: 0 })
    }, 3000)
  }

  render() {
    console.log(this.state)
    return (
      <div className="carouselBackground">
        <p> : </p>
        <Carousel autoPlay interval={3000} infiniteLoop>
          <div>
            <img
              className="carouselImages"
              src={require("./carouselimages/MPX analog wiring system.png")}
            />
            <p className="legend">Legend</p>
          </div>
          <div>
            <img
              className="carouselImages"
              src={require("./carouselimages/Power over ethernet.png")}
            />
            <p className="legend">Legend</p>
          </div>
          <div>
            <img
              className="carouselImages"
              src={require("./carouselimages/Wireless security system.png")}
            />
            <p className="legend">Legend</p>
          </div>
        </Carousel>
      </div>
    )
  }
}
export default FirstCarousel
