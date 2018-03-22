import React, {Component} from 'react';

class InstallMethodBanner extends Component {


render() {
return(
<div  className="bannerFlex" style={{marginTop: "2vh", padding: "1vw"}}>
<div className="carouselBackground">
  <img
    className="carouselImages firstCarouselImage"
    src={require("../../First/childComponents/carouselimages/MPX analog wiring system.png")}
  />

  <img
    className="carouselImages secondCarouselImage"
    src={require("../../First/childComponents/carouselimages/Power over ethernet.png")}
  />

  <img
    className="carouselImages thirdCarouselImage"
    src={require("../../First/childComponents/carouselimages/Wireless security system.png")}
  />
  <img
    className="carouselImages fourthCarouselImage"
    style={{ borderRadius: "12px" }}
    src={require("../../First/childComponents/carouselimages/schema.png")}
  />
</div>

<p
  style={{  color: "white", textAlign: "center", textSize:"1em", width: "40vw" }}>
  We offer multiple security and hardware installation options. We can provide custom installations tailored around the customer's need. Our Installation Professionals fine-tune the security equipment for maximum performance and efficiency.</p>
</div>
)}
}
export default InstallMethodBanner