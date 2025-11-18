import React from 'react';
import './App.css';

function App() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className="App">
      <div className='form-login'>
        <h1 className='header'>Login</h1>
        <input 
          className='input-user-login'
          type='text' 
          placeholder='Username'
        ></input>
        <input 
          className='input-password-login'
          type='password' 
          placeholder='Password'
        ></input>
        <div className='checkbox-login'>
          <input 
            type='checkbox' 
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          ></input>
          <label className='label-remember-me'>Remember me</label>
        </div>
        <div className='forgot-password'>
          <a href='#' className='link-forgot-password'>Forgot Password?</a>
        </div>
        <div>
          <button className='button'>Login</button>
        <div className='sign-up'>
          <label className='label-remember-me'>Don't have an Account?</label>&nbsp;
          <a href='#' className='link-forgot-password'>Register</a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
