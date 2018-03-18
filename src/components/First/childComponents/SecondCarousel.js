import React, {Component} from 'react'

class SecondCarousel extends Component{

render(){
return(
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
export default SecondCarousel