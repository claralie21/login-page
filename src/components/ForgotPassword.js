import React from 'react';
import './assets/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/');
  }

  return (
    <div className="App">
      <div className='form-login'>
        <h1 className='header'>Forgot Password</h1>
        <input 
          className='input-email-login'
          type='email' 
          placeholder='Enter email address'
        ></input>
        <div>
          <button className='button' type='submit'>Continue</button>
          
          <button onClick={handleBackToLogin} className='button' style={{color:'black', backgroundColor:'white'}} type='submit'>Back to Login</button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
