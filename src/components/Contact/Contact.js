import React, {Component} from 'react'
import Nav from '../First/childComponents/Nav'

import './contact.css'

class Contact extends Component{
    constructor(){
        super()
        this.state = {
            firstNameText: "",
            lastNameText: "",
            emailAddressText:"",
            companyNameText: "",
            phoneNumberText: "",
            serviceLocationtext: "",
            hardwareText: "",
            additionalInformationText: ""

        }
    }


    sendMethod(firstname, lastname){
        console.log(firstname, lastname)
    }








render(){
return(
<div className="generalHeight">
    <Nav />

    <div className="contactRowOfColumns">
        <div className="contactTextColumn">
        <p>PROTECT WHAT MATTERS MOST TO YOU</p>
        <p>Send us a message - let us know how we can help. Ambience Total Security is a rapidly growing company, and offers some of the latest tech on security and automation hardware. We take great pride in our client-first approach and our advanced management structure that makes us the best choice for your needs. Please fill out this form and a Business Development Manager will be in touch with you ASAP!</p>
        </div>
        <div >
   
<p>First Name</p>
<input placeholder="Your first name." name="firstname" type="text" />
<p>Last Name</p>
<input placeholder="Your last name." name="lastname" type="text"/>
<p>Your Email Address</p>
<input placeholder="Your email address." />
<p>Company Name (optional)</p>
<input placeholder="Name of the company you represent." />
<p>Phone Number</p>
<input placeholder="The est number to reach you at." />
<p> Service Location</p>
<textarea placeholder="City, state, address, or any general information about the location of service." />
<p>Special Hardware Requests</p>
<input placeholder="Hardware brand/model/type" />
<p>Additional Information</p>
<textarea placeholder="Additional information about your request"/>
<button onSubmit={()=> this.sendMethod(this.state.firstNameText, this.state.lastNameText)} style={{backgroundColor: "#003060", color: "white", borderRadius:"5px", padding: "10px"}}>SUBMIT </button>

</div>
</div>
</div>
)
}
}
export default Contact