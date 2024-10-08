// Allroutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Authentification/Login';
import Signup from '../pages/Authentification/Signup';
import UpdatePassword from '../pages/Authentification/Updatepassword';
import VerifyPassword from '../pages/Authentification/Verify';
import AddHospital from '../modules/AddHospital';
import AddPatient from '../modules/AddPatient';
import AddDoctor from '../modules/AddDoctor';
import ViewTransactions from '../modules/ViewTransactions';
import AddService from '../modules/AddService';
import ViewAllPatients from '../modules/ViewAllPatients';
import ViewAllServices from '../modules/ViewAllServices';
import AddAdmin from '../modules/AddAdmin';
import Pay from "../modules/Pay"
import ViewAllHospitals from '../modules/ViewAllHospitals';
import ViewAllUsers from "../modules/ViewAllUsers"
import ViewAllAdmins from '../modules/ViewAllAdmins';
import AddServiceToPatient from '../modules/AddServiceToPatient';

const Allroutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/verify-password" element={<VerifyPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="pay" element={<Pay/>} />
          <Route path="add-hospital" element={<AddHospital />} />
          <Route path="view-hospital" element={<ViewAllHospitals />} />
          <Route path="add-patient" element={<AddPatient />} />
          <Route path="add-doctor" element={<AddDoctor />} />
          <Route path="view-users" element={<ViewAllUsers/>} />
          <Route path="view-admins" element={<ViewAllAdmins/>} />
          <Route path="view-transactions" element={<ViewTransactions />} />
          <Route path="add-service" element={<AddService />} />
          <Route path="patients" element={<ViewAllPatients />} />
          <Route path="view-services" element={<ViewAllServices />} />
          <Route path="add-admin" element={<AddAdmin />} />
          <Route path="add-service-to-patient" element={<AddServiceToPatient/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Allroutes;
