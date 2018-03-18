import React, { Component } from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import FirstCarousel from './childComponents/FirstCarousel'
import Nav from './childComponents/Nav'

import "../components.css"
import "../animate.css"


class First extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 33.081040, lng: -96.677229 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 33.081040, lng: -96.677229 }} />}
    </GoogleMap>
  ))
    return (
          <div className="generalHeight topBackground">
      <Nav />
        <div className = "bannerFlex">
        <FirstCarousel />
        <h1 style={{marginTop: "0vh", color: "white", textAlign: "center"}}> Ambience Total Security</h1>
          <img src={require('../images/topbannerpic.png')} style={{borderRadius: "25px", height: "36vh"}}/>
          </div>
        <div>
          <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `40vh`, width: `40vw` }} />}
  containerElement={<div style={{ height: `50vh`, width: `40vw` }} />}
  mapElement={<div style={{ height: `40vh`, width: `40vw` }} />}
/>
        
</div>

      </div>
    )
  }
}
export default First
