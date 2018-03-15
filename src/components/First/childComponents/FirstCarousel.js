import React, {Component} from 'react'
import Slider from 'react-slick'

import './firstcarousel.css'
class FirstCarousel extends Component{
constructor(){
    super()
    this.state ={
        settings:{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
    }
}

    render(){
        const {settings} = this.state
        return(
        <div>
                  <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
                
            </div>
        )
    }
}
export default FirstCarousel