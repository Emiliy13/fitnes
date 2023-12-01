import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:4000/register', { email, password });
      if (response && response.data) {
        setMessage("Registracija uspesna");
      } else {
        setMessage('Registration unsuccessful, please try again.');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration unsuccessful, please try again.');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
