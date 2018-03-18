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
          <p style={{textAlign: "center", fontSize: "24px"}}>Located in the Dallas / Ft Worth Metroplex</p>
        <div className="firstBottom">
          <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `40vh`, width: `40vw` }} />}
  containerElement={<div style={{ height: `50vh`, width: `40vw` }} />}
  mapElement={<div style={{ height: `40vh`, width: `40vw` }} />}
/>
    <div className="firstBottomColumnFlex">
      <p ><b>SECURITY</b> technology and services. <br />
      And automation at it's best.</p>    
      <p> Ambience Total Security is a privately owned and operated security firm serving the Dallas / Fort Worth Metroplex. can help you with any Automation or Security System concern.  Whether it's home alarms, closed circuit television, media centers, lighting, temperature control systems, aquaponics, access control, or you name it - we will find the solution that is right for you.  Home and commercial applications.</p>
      <p> We stay ahead of the game and give you direct insight by providing constant communication from our most qualified and educated security professionals. From shopping centers to gated communities to homes, our security experts are experienced and carry the knowledge, equipment, and skills to meet your security needs fast and effectively. Our approach is client-first, and our grassroots growth lends to our unique ability to meet a wide array of any business’s or home's security and automation needs. We are more than a private security/automation industry— we provide quality customer service from our best-in-class management team that goes the extra mile to meet any challenges with quick, flexible, and decisive resolution. Our promise is that you are left feeling empowered and secure, and we have the intel to make that happen. </p>
      </div>
</div>

      </div>
    )
  }
}
export default First
