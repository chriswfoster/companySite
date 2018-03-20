import React, { Component } from "react"
import Nav from "../First/childComponents/Nav"
import axios from "axios"

import "./contact.css"

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      contactQuoteText: "REQUEST A QUOTE",

      //// input text
      firstNameText: "",
      lastNameText: "",
      emailAddressText: "",
      companyNameText: "",
      phoneNumberText: "",
      serviceLocationText: "",
      hardwareText: "",
      additionalInformationText: ""
    }
  }

  sendMethod(
    firstname,
    lastname,
    email,
    company,
    phone,
    location,
    hardware,
    additional
  ) {
    console.log(
      firstname,
      lastname,
      email,
      company,
      phone,
      location,
      hardware,
      additional
    )
    axios.post("/api/submitcontact/", {
      firstname,
      lastname,
      email,
      company,
      phone,
      location,
      hardware,
      additional
    })
  }

  //////////////////////// on change events:
  fnText(val) {
    this.setState({ firstNameText: val })
  }
  lnText(val) {
    this.setState({ lastNameText: val })
  }
  emailText(val) {
    this.setState({ emailAddressText: val })
  }
  cnText(val) {
    this.setState({ companyNameText: val })
  }
  pnText(val) {
    this.setState({ phoneNumberText: val })
  }
  slText(val) {
    this.setState({ serviceLocationText: val })
  }
  hwText(val) {
    this.setState({ hardwareText: val })
  }
  aiText(val) {
    this.setState({ additionalInformationText: val })
  }

  dropDown(val) {
    val === "contact"
      ? this.setState({ contactQuoteText: "CONTACT US" })
      : this.setState({ contactQuoteText: "REQUEST A QUOTE" })
  }

  render() {
    console.log(this.state)
    const {
      firstNameText,
      lastNameText,
      emailAddressText,
      companyNameText,
      phoneNumberText,
      serviceLocationText,
      hardwareText,
      additionalInformationText
    } = this.state
    return (
      <div className="generalHeight " style={{ backgroundColor: "#e5e3df" }}>
        <Nav />
        <div className="contactBanner">
          <p style={{ fontWeight: "bold", fontSize: "2em" }}>
            {this.state.contactQuoteText}
          </p>
          <p style={{ marginTop: "-3vh", fontSize: ".8em" }}>
            Ambience Total Security
          </p>
        </div>
        <div className="contactRowOfColumns"  style={{ backgroundColor: "#e5e3df"}}>
          <div className="contactTextColumn">
            <p>PROTECT WHAT MATTERS MOST TO YOU</p>
            <p>
              Send us a message - let us know how we can help. Ambience Total
              Security is a rapidly growing company, and offers some of the
              latest tech on security and automation hardware. We take great
              pride in our client-first approach and our advanced management
              structure that makes us the best choice for your needs. Please
              fill out this form and a Business Development Manager will be in
              touch with you ASAP!
            </p>
          </div>

          <div className="contactFlex">
            <div>
              <p>Contact/Quote:</p>
              <select
                defaultValue="quote"
                onChange={e => this.dropDown(e.target.value)}
              >
                <option value="contact">Contact</option>
                <option value="quote">Quote</option>
              </select>
            </div>
            <div>
              <p>First Name</p>
              <input
                placeholder="Your first name."
                onChange={e => this.fnText(e.target.value)}
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                placeholder="Your last name."
                onChange={e => this.lnText(e.target.value)}
              />
            </div>
            <div>
              <p>Your Email Address</p>
              <input
                placeholder="Your email address."
                onChange={e => this.emailText(e.target.value)}
              />
            </div>
            <div>
              <p>Company Name (optional)</p>
              <input
                placeholder="Name of the company you represent."
                style={{ width: "15vw" }}
                onChange={e => this.cnText(e.target.value)}
              />
            </div>
            <div>
              <p>Phone Number</p>
              <input
                placeholder="The best number to reach you at."
                style={{ width: "15vw" }}
                onChange={e => this.pnText(e.target.value)}
              />
            </div>
            <div>
              <p> Service Location</p>
              <textarea
                placeholder="City, state, address, or any general information about the location of service."
                style={{ width: "15vw", height: "5vh" }}
                onChange={e => this.slText(e.target.value)}
              />
            </div>
            <div>
              <p>Special Hardware Requests</p>
              <input
                placeholder="Hardware brand/model/type"
                onChange={e => this.hwText(e.target.value)}
                style={{ width: "15vw" }}
              />
            </div>
            <div>
              <p>Additional Information</p>
              <textarea
                placeholder="Additional information about your request"
                onChange={e => this.aiText(e.target.value)}
                style={{ width: "15vw", height: "10vh", marginRight: "5vh" }}
              />
            </div>
            <button
              onClick={() =>
                this.sendMethod(
                  firstNameText,
                  lastNameText,
                  emailAddressText,
                  companyNameText,
                  phoneNumberText,
                  serviceLocationText,
                  hardwareText,
                  additionalInformationText
                )
              }
              style={{
                backgroundColor: "#003060",
                color: "white",
                borderRadius: "5px",
                padding: "10px"
              }}
            >
              SUBMIT{" "}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact
