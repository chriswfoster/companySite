import React, {Component} from 'react'

class Contact extends Component{
    constructor(){
        super()
        this.state = {
        }
    }

render(){
return(
<div>
<p>First Name</p>
<input placeholder="Your first name." />
<p>Last Name</p>
<input placeholder="Your last name." />
<p>Your Email Address</p>
<input placeholder="Your email address." />
<p>Company Name (optional)</p>
<input placeholder="Name of the company you represent." />
<p>Phone Number</p>
<input placeholder="The est number to reach you at." />
<p> Service Location</p>
<textarea placeholder="City, state, address, or any general information about the location of service." />
<p placeholder="Hardware brand/model/type">Special Hardware Requests</p>
<p>Additional Information</p>
<textarea placeholder="Additional information about your request"/>


</div>
)
}
}
export default Contact