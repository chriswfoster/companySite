import React, { Component } from "react"


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
        <div>

            <img
              className="carouselImages firstCarouselImage"
              src={require("./carouselimages/MPX analog wiring system.png")}
            />

            <img
              className="carouselImages secondCarouselImage"
              src={require("./carouselimages/Power over ethernet.png")}
            />

            <img
              className="carouselImages thirdCarouselImage"
              src={require("./carouselimages/Wireless security system.png")}
            />
           

        </div>
      </div>
    )
  }
}
export default FirstCarousel
