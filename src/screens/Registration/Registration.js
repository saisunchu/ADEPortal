import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Registration() {
  const [gstNumber, setGstNumber] = useState('');
  const [pancardNumber, setPancardNumber] = useState('');
  const [labourLicenceNumber, setLabourLicenceNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputs = [gstNumber, pancardNumber, labourLicenceNumber];
    const filledInputs = inputs.filter(input => input !== '');

    if (filledInputs.length === 1 && password !== '') {
      if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setRegistrationStatus('Password must be at least 8 characters long and contain at least one special character');
      } else {
        const isValidGstNumber = gstNumber && gstNumber.length === 15;
        const isValidPancardNumber = pancardNumber && /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pancardNumber);
        const isValidLabourLicenceNumber = labourLicenceNumber && labourLicenceNumber.length === 10;
      
        if (isValidGstNumber || isValidPancardNumber || isValidLabourLicenceNumber) {
          setRegistrationNumber(filledInputs[0]);
          setRegistrationStatus(`Registration Successful, Please note your Registration Number - ${filledInputs[0]}`);
        } else {
          setRegistrationStatus('Please enter a valid GST Number, Pan Card Number, or Labour Licence Number');
        }
      }
    } else {
      setRegistrationStatus('Please enter only one of the following: GST Number, Pan Card Number, Labour Licence Number');
    }
  };
          
  return (
    <div className="container">
      <h1 className="registration-heading">Registration</h1>
      <form id="Registration" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="gstNumber">GST Number:</label>
          <input
            type="text"
            id="gstNumber"
            className="form-control"
            value={gstNumber}
            onChange={(event) => setGstNumber(event.target.value)}
            placeholder="Enter GST Number"
          />
        </div>
        <div className="or">Or</div>
        <div className="form-group">
          <label htmlFor="pancardNumber">Pan Card Number:</label>
          <input
            type="text"
            id="pancardNumber"
            className="form-control"
            value={pancardNumber}
            onChange={(event) => setPancardNumber(event.target.value)}
            placeholder="Enter Pan Card Number"
          />
        </div>
        <div className="or">Or</div>
        <div className="form-group">
          <label htmlFor="labourLicenceNumber">Labour Licence Number:</label>
          <input
            type="text"
            id="labourLicenceNumber"
            className="form-control"
            value={labourLicenceNumber}
            onChange={(event) => setLabourLicenceNumber(event.target.value)}
            placeholder="Enter Labour Licence Number"
          />
        </div>
        {/* <div className="or">Or</div> */}
        <div className="form-group">
          <label htmlFor="companyName" style={{ marginTop: '30px' }} >Company Name:</label>
          <input
            type="text"
            id="companyName"
            className="form-control"
            style={{ marginTop: '30px' }}
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            placeholder="Enter Company Name"
          />
        </div>
        <div className="spacer"></div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      {registrationStatus && (
        <p
          className={`registration-status ${
            registrationStatus === `Registration Successful, Please note your Registration Number - ${registrationNumber}`
              ? 'success'
              : 'error'
          }`}
        >
          {registrationStatus}
        </p>
      )}
      <p>
        Already registered? <Link to="/">Go to Login</Link>
      </p>
    </div>
  );
}

export default Registration;
