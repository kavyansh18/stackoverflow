import React, { useState } from 'react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleUpdatePassword = () => {
    // Update password logic here
    alert('Password updated successfully!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '150px' }}>
  <h2 style={{ color: '#ef8236', marginBottom: '20px' }}>Reset Password</h2>
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
  );
};

export default ResetPassword;