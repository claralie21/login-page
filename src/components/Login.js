import React from 'react';
import './assets/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoggedIn(false)
    setIsLoggingIn(true);
    try {
      const baseUrl = 'https://example.com/api/login'
      const response =  baseUrl && await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        setIsLoggedIn(true);
        setSuccessMessage('Login successful!');
      }
    }
    catch (error) {
      setErrorMessage('Login failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
      setIsLoggedIn(true)
    }
  }

  return (
    <div className="App">
      <form className='form-login'>
        <h1 className='header'>Login</h1>
        <input 
          className='input-user-login'
          type='text' 
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        ></input>
        <input 
          className='input-password-login'
          type='password' 
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
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
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && isLoggedIn && <p style={{ color: 'green' }}>{successMessage}</p>}
        <div>
          <button className='button' type='submit' disabled={isLoggingIn || !username || !password} onClick={handleLogin}>
            {isLoggingIn ? 'Logging in...' : 'Log In'}
          </button>
          <div className='sign-up'>
            <label className='label-remember-me'>Don't have an account?</label>&nbsp;
            <Link to="/signup">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
