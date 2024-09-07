// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { FaHome, FaList, FaWallet, FaUserMd, FaUser, FaHospital, FaUserPlus } from 'react-icons/fa'; // Additional icons

const Sidebar = () => {
  const { userType } = useStore(); // Destructure userType from the store

  return (
    <div className="h-screen w-64 bg-[#500085] text-white p-7 shadow-lg">
      <div className="text-2xl font-bold mb-6">Tiba Pay</div>
      <ul className="space-y-4">
        {/* Conditional rendering based on userType */}
        {userType === "patient" && (
          <>
            <li>
              <Link to="/dashboard/pay" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaWallet className="text-xl" />
                <span>Pay for a Service</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/transactions" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaList className="text-xl" />
                <span>View All Transactions</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaHome className="text-xl" />
                <span>View All Services</span>
              </Link>
            </li>
          </>
        )}
        {userType === "doctor" && (
          <>
            <li>
              <Link to="/dashboard/add-service" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaUserMd className="text-xl" />
                <span>Add a Service to a Patient</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/patients" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaUser className="text-xl" />
                <span>View All Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaHome className="text-xl" />
                <span>View All Services</span>
              </Link>
            </li>
          </>
        )}
        {userType === "hospital_admin" && (
          <>
            <li>
              <Link to="/dashboard/add-patient" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaUserPlus className="text-xl" />
                <span>Add Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-doctor" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaUserMd className="text-xl" />
                <span>Add Doctors</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/view-transactions" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaList className="text-xl" />
                <span>View Transactions</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-service" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaHome className="text-xl" />
                <span>Add Services</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/view-users" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaHome className="text-xl" />
                <span>View All Users</span>
              </Link>
            </li>
          </>
        )}
        {userType === "super_admin" && (
          <>
            <li>
              <Link to="/dashboard/add-hospital" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaHospital className="text-xl" />
                <span>Add Hospitals</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/view-hospital" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaHospital className="text-xl" />
                <span>View All Hospitals</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/view-admins" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaHospital className="text-xl" />
                <span>View All Admins</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-doctor" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaUserMd className="text-xl" />
                <span>Add Doctor</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-admin" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                <FaUserPlus className="text-xl" />
                <span>Add Admin</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
