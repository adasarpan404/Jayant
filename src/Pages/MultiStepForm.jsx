import React, { useState } from "react";
import EmailForm from "../Components/MultiStep/EmailForm";
import NameForm from "../Components/MultiStep/NameForm";
import PhoneNumber from "../Components/MultiStep/PhoneNumber";




function MultiStepForm() {

  const [emailForm , setEmailForm ] = useState(true)
  const [nameForm, setNameForm] = useState(false)
  const [phoneNumberForm, setPhoneNumberForm] = useState(false)

  const handleNameForm=() => {
    /**
     * @desc this function is being used to open name form and closing down the email form
     */
    setEmailForm(false);
    setNameForm(true);
  }
  const handlePhoneNumberForm = () =>{
    /**
     * @desc this function is being used to used open phone number form and closing down the name form
     */
    setPhoneNumberForm(true);
    setNameForm(false);
  }
  
  return (
    <div>
      
      {emailForm?<EmailForm handleNameForm={handleNameForm}/>: null}
      {nameForm? <NameForm  handlePhoneNumberForm={handlePhoneNumberForm}/>: null}
      {phoneNumberForm? <PhoneNumber/>: null}
    
    </div>
  );
}

export default MultiStepForm;
