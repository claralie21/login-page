import React from 'react';
import './assets/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="App">
      <div className='form-login'>
        <h1 className='header'>Login</h1>
        <input 
          className='input-user-login'
          type='text' 
          placeholder='Username'
          value={username}
          required
        ></input>
        <input 
          className='input-password-login'
          type='password' 
          placeholder='Password'
          value={password}
          required
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
          <a href='/forgot-password' className='link-forgot-password'>Forgot Password?</a>
        </div>
        <div>
          <button className='button' type='submit' disabled={!username || !password}>Login</button>
          <div className='sign-up'>
            <label className='label-remember-me'>Don't have an account?</label>&nbsp;
            <Link to="/signup">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
