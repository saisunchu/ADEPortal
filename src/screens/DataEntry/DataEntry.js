import React, { useState } from 'react';
import './styles.css'; // Import external CSS file
import { useNavigate } from 'react-router-dom';

function DataEntry() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [leavingDate, setLeavingDate] = useState('');
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Add login status

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = [...data, { name, designation, gender, joiningDate, leavingDate }];
    setData(newData);
    setName('');
    setDesignation('');
    setGender('');
    setJoiningDate('');
    setLeavingDate('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update login status
    
    navigate('/', { replace: true }); // Navigate to the Login page
    
  };


  return (
    <>
     {isLoggedIn ? (
        <>
    <div className="container">
     

      <form id="myForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                pattern="[A-Za-z ]+"
                title="Name should contain only letters and spaces"
                required
              />
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <input
                type="text"
                id="designation"
                className="form-control"
                placeholder="Enter Designation"
                value={designation}
                pattern="[A-Za-z ]+"
                title="Designation should contain only letters and spaces"
                required
                onChange={(event) => setDesignation(event.target.value)}
              />
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <select
                id="gender"
                className="form-control"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <input
                type="date"
                id="joiningDate"
                className="form-control"
                placeholder="Joining Date"
                value={joiningDate}
                onChange={(event) => setJoiningDate(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <input
                type="date"
                id="leavingDate"
                className="form-control"
                placeholder="Leaving Date"
                value={leavingDate}
                onChange={(event) => setLeavingDate(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="column">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="scrollable" id="displayData">
        <table className="table-separator" id="dataTable">
          <thead>
            <tr className="heading-row">
              <th>Name</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Joining Date</th>
              <th>Leaving Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>{item.gender}</td>
                <td>{item.joiningDate}</td>
                <td>{item.leavingDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

    </div>
    <button type="button" className="logout-button" onClick={handleLogout}>
    Logout
  </button>
</>
) : (
<p>You are logged out.</p>
)}
</>
  );
}

export default DataEntry;
