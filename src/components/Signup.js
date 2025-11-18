import React from 'react';
import './assets/Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className="App">
      <div className='form-signup'>
        <h1 className='header'>Sign up</h1>
        <input 
          className='input-user-login'
          type='text' 
          placeholder='Username'
        ></input>
        <input 
          className='input-email-login'
          type='email' 
          placeholder='Email'
        ></input>
        <input 
          className='input-password-login'
          type='password' 
          placeholder='Password'
        ></input>
        <input 
          className='input-password-login'
          type='password' 
          placeholder='Confirm Password'
        ></input>
        <div className='checkbox-login'>
            <div className='sign-up-tnc'>
                <input 
                    type='checkbox' 
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                ></input>
                <label className='label-remember-me'>I agree to the </label>&nbsp;
                <Link to="/tnc">Terms and Conditions</Link>
            </div>
        </div>
        <div>
          <button className='button'>Create Account</button>
            <div className='sign-up'>
                <label className='label-remember-me'>Already have an account?</label>&nbsp;
                <Link to="/">Login</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
