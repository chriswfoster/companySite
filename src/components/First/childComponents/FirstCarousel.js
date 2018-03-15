import React, {Component} from 'react'
import Carousel from 'nuka-carousel';

import './firstcarousel.css'
class FirstCarousel extends Component{
constructor(){
    super()
    this.state = {

    }
}

    render(){
        
        return(
        <div style={{maxWidth: "50vw"}}>
        <Carousel>
        <img src={require('./carouselimages/MPX analog wiring system.png')} />
        <img src={require('./carouselimages/Power over ethernet.png')} />
        <img src={require('./carouselimages/Wireless security system.png')} />
      </Carousel> 
            </div>
        )
    }
}
export default FirstCarousel