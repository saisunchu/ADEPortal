import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();



  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your login logic, for now let's just show a success message
    setLoginStatus('Login Successful');
    navigate('/data-entry', { replace: true }); // Navigate to the data entry page

  };



  return (
    <div className="container">
      <h1 className="login-heading">Login</h1>
      <form id="Login" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="registrationNumber">Registration Number:</label>
          <input
            type="text"
            id="registrationNumber"
            className="form-control"
            value={registrationNumber}
            onChange={(event) => setRegistrationNumber(event.target.value)}
            placeholder="Enter Registration Number"
            required
          />
        </div>
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
          Login
        </button>
      </form>
      {loginStatus && (
        <p className="login-status success">
          {loginStatus}
        </p>
      )}
      {/* Add a link to navigate to the Registration page */}
      <p className='registration' >New Here, Please <Link to="/Registration">Register</Link></p>
    </div>
  );
}

export default Login;
