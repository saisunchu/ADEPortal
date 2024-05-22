import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataEntry from './screens/DataEntry/DataEntry';
import CompanyNameEntry from './screens/CompanyNameEntry/CompanyNameEntry';
import Registration from './screens/Registration/Registration';
import Login from './screens/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/CompanyNameEntry" element={<CompanyNameEntry />} />
        <Route path="/data-entry" element={<DataEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
