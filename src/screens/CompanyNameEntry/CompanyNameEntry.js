import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import external CSS file


function CompanyNameEntry() {
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();



  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Company Name Submitted: ' + companyName);
    setCompanyName('');
    navigate('/data-entry');
  };

  return (
    <div className="container">
      <h1>Enter Company Name</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            placeholder="Enter Company Name"
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CompanyNameEntry;
