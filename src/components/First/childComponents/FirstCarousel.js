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
        

            <img
              className="carouselImages firstCarouselImage"
              src={require("./carouselimages/security 2.png")}
            />

            <img
              className="carouselImages secondCarouselImage"
              src={require("./carouselimages/automation 5.png")}
            />

            <img
              className="carouselImages thirdCarouselImage"
              src={require("./carouselimages/CustomSolutions.png")}
            />
            <img className ="carouselImages fourthCarouselImage"
              src={require("./carouselimages/247support.png")}/>
           

        </div>
    
    )
  }
}
export default FirstCarousel
