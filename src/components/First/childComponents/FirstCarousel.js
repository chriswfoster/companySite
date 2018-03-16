import React, {Component} from 'react'
import Carousel from 'nuka-carousel';

import './firstcarousel.css'
class FirstCarousel extends Component{
constructor(){
    super()
    this.state = {
        slideIndex: 0
    }
}

slideHandler(slideIndex){
            this.state.slideIndex === 2 ?
            this.changeInterval() :
    this.setState({ slideIndex });
}
changeInterval(){
    let that = this
    setTimeout(function(){
        that.setState({slideIndex: 0})
    }, 3000)
    
}


    render(){
  
        return(
        <div className="carouselBackground" >
        <Carousel autoplay={true} autoplayInterval={3000} slideIndex={this.state.slideIndex}
        afterSlide={slideIndex => this.slideHandler(slideIndex)}>
        <img src={require('./carouselimages/MPX analog wiring system.png')} />
        <img src={require('./carouselimages/Power over ethernet.png')} />
        <img src={require('./carouselimages/Wireless security system.png')} />
      </Carousel> 
            </div>
        )
    }
}
export default FirstCarousel