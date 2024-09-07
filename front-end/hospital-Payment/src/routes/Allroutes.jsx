import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home"
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Authentification/Login';
import Signup from '../pages/Authentification/Signup';
import UpdatePassword from '../pages/Authentification/Updatepassword';
import VerifyPassword from '../pages/Authentification/Verify';

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
      </Routes>
    </Router>
  )
}

export default Allroutes
