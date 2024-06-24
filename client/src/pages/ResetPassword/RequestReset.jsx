import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useDispatch } from 'react-redux';
import { updatePasswordByEmail } from "../../actions/users";

function generateOTP() { 
  var string = '0123456789';
  let OTP = '';
  var len = string.length;
  for (let i = 0; i < 6; i++ ) {
    OTP += string[Math.floor(Math.random() * len)];
  }
  return OTP;
}

const RequestReset = () => {
  const [email, setEmail] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(generateOTP());
  const [enteredOtp, setEnteredOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setEnteredOtp(e.target.value);
  };

  const sendMail = () => {
    const userMail = email;
    console.log(userMail);
    const newOtp = generateOTP(); 
    setGeneratedOtp(newOtp); 
    emailjs.send("service_wv8cq8j","template_ntyb1i5", {
      message: `${newOtp}`,
      userEmail: `${userMail}`,
    }, "swU-wNPlEbJmvt71W")
  .then((e) => alert('OTP sent successfully'))
  .catch((err) => {console.log(err)});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail();
  };

  const handleVerify = () => {
    //console.log(email)
    if (enteredOtp === generatedOtp) {
      setIsOtpVerified(true);
    } else {
      alert('Invalid OTP');
    }
  };


  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleUpdatePassword = () => {
    dispatch(updatePasswordByEmail(email, newPassword));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '150px' }}>
      <h2 style={{ color: '#ef8236', marginBottom: '20px' }}>Request Password Reset</h2>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        style={{ padding: '10px', width: '300px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button
        onClick={handleSubmit}
        style={{ padding: '10px 20px', backgroundColor: '#ef8236', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Send OTP
      </button>
      <input
        type="text"
        value={enteredOtp}
        onChange={handleOtpChange}
        placeholder="Enter OTP"
        style={{ padding: '10px', width: '300px', marginBottom: '10px',marginTop: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button
        onClick={handleVerify}
        style={{ padding: '10px 20px', backgroundColor: '#ef8236', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Verify OTP
      </button>
      {isOtpVerified && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }} >
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="Enter new password"
            style={{ padding: '10px', width: '300px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button
            onClick={handleUpdatePassword}
            style={{ padding: '10px 20px', backgroundColor: '#ef8236', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Update Password
          </button>
        </div>
      )}
    </div>
  );
};

export default RequestReset;