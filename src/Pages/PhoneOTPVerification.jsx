import React, { useEffect, useState } from 'react'
import OTPInput from "otp-input-react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function PhoneOTPVerification() {
  const [OTP, setOTP] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(()=>{
    if(OTP === "1234"){
      setIsModalVisible(true);
    }
  },[OTP])

 
  const handleCancel = () => {
    setIsModalVisible(false);
  }
  return (

    <div display='flex' align-items='center'>
    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
    <Modal
        open={isModalVisible}
        onClose={handleCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            OTP successfully Verified
          </Typography>
          
        </Box>
      </Modal>
    </div>
  )
}

export default PhoneOTPVerification