import React from "react";
import ContactInput from "./ContactInput";



function ContactLogin() {
  return (
    <div className="DivForm">
    <form className="form">
      <span>Contact Person: <ContactInput type="Text" placeholder="Contact Person" /></span> 
      <span>Compony Name: <ContactInput type="Text" placeholder="Compony Name" /></span> 
      <span>Phone Number: <ContactInput type="Text" placeholder="Phone Number" /></span> 
      <span>Email Id: <ContactInput type="Email" placeholder="Email Id" /></span> 
      <span>Subject: <ContactInput type="Text" placeholder="Subject" /></span> 
      <span>Requirements: <br /><textarea id="textArea" placeholder="Requirements / Details	" /></span> 
      <br />
      <button className="SubmitB" type="submit">Submit</button>
    </form>
    </div>

    
  );
}

export default ContactLogin;
