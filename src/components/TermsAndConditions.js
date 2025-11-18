import React from 'react';
import './assets/TermsAndConditions.css';

const TermsAndConditions = ({ isChecked, onChange }) => {
  
  return (
    <div className="App">
      <div className='form-tnc'>
        <h1 className='header'>Terms and Conditions</h1>
        <div style={{ height: '150px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
          <p>This document constitutes the entire agreement between you and the company...</p>
          <p>By clicking "I Agree," you acknowledge that you have read and accepted these terms...</p>
        </div>

          <input
            type="checkbox"
            id="agreeTerms"
            checked={isChecked}
            onChange={onChange}
            required 
          />
          <label htmlFor="agreeTerms">
            I have read and agree to the <a href="/terms" target="_blank">Terms and Conditions</a> and <a href="/privacy" target="_blank">Privacy Policy</a>.
          </label>
          <button className='button' type='submit' disabled={!isChecked}>I Agree</button>
      </div>
    </div>
  );
};

export default TermsAndConditions;