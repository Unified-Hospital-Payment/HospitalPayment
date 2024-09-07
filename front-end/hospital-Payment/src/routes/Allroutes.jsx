// Allroutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Dashboard from '../pages/Dashboard';
import AddHospital from '../modules/AddHospital';
import AddPatient from '../modules/AddPatient';
import AddDoctor from '../modules/AddDoctor';
import ViewTransactions from '../modules/ViewTransactions';
import AddService from '../modules/AddService';
import ViewAllPatients from '../modules/ViewAllPatients';
import ViewAllServices from '../modules/ViewAllServices';
import AddAdmin from '../modules/AddAdmin';
import Pay from "../modules/Pay"

const Allroutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="pay" element={<Pay/>} />
          <Route path="add-hospital" element={<AddHospital />} />
          <Route path="add-patient" element={<AddPatient />} />
          <Route path="add-doctor" element={<AddDoctor />} />
          <Route path="view-transactions" element={<ViewTransactions />} />
          <Route path="add-service" element={<AddService />} />
          <Route path="patients" element={<ViewAllPatients />} />
          <Route path="services" element={<ViewAllServices />} />
          <Route path="add-admin" element={<AddAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Allroutes;
