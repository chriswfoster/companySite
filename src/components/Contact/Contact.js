import React, {Component} from 'react'
import Nav from '../First/childComponents/Nav'
import axios from 'axios'

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
            serviceLocationText: "",
            hardwareText: "",
            additionalInformationText: ""

        }
    }


    sendMethod(firstname, lastname, email, company, phone, location, hardware, additional){
        console.log(firstname, lastname, email, company, phone, location, hardware, additional)
        axios.post('/api/submitcontact/', {
            firstname, lastname, email, company, phone, location, hardware, additional
        })
    }


//////////////////////// on change events:
fnText(val){
    this.setState({firstNameText: val})
}
lnText(val){
    this.setState({lastNameText: val})
}
emailText(val){
    this.setState({emailAddressText: val})
}
cnText(val){
    this.setState({companyNameText: val})
}
pnText(val){
    this.setState({phoneNumberText: val})
}
slText(val){
    this.setState({serviceLocationText: val})
}
hwText(val){
    this.setState({hardwareText: val})
}
aiText(val){
    this.setState({additionalInformationText: val})
}




render(){
    console.log(this.state)
    const {firstNameText, lastNameText, emailAddressText, companyNameText, phoneNumberText, serviceLocationText, hardwareText, additionalInformationText} = this.state
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
<input placeholder="Your first name." onChange={(e)=> this.fnText(e.target.value) } />
<p>Last Name</p>
<input placeholder="Your last name." onChange={(e)=> this.lnText(e.target.value)}/>
<p>Your Email Address</p>
<input placeholder="Your email address." onChange={(e)=> this.emailText(e.target.value)} />
<p>Company Name (optional)</p>
<input placeholder="Name of the company you represent." onChange={(e)=> this.cnText(e.target.value)}/>
<p>Phone Number</p>
<input placeholder="The est number to reach you at." onChange={(e)=> this.pnText(e.target.value)}/>
<p> Service Location</p>
<textarea placeholder="City, state, address, or any general information about the location of service." onChange={(e)=> this.slText(e.target.value)}/>
<p>Special Hardware Requests</p>
<input placeholder="Hardware brand/model/type" onChange={(e)=> this.hwText(e.target.value)}/>
<p>Additional Information</p>
<textarea placeholder="Additional information about your request" onChange={(e)=> this.aiText(e.target.value)}/>
<button onClick={()=> this.sendMethod(firstNameText, lastNameText, emailAddressText, companyNameText, phoneNumberText, serviceLocationText, hardwareText, additionalInformationText)} style={{backgroundColor: "#003060", color: "white", borderRadius:"5px", padding: "10px"}}>SUBMIT </button>

</div>
</div>
</div>
)
}
}
export default Contact