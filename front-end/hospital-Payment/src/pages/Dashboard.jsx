// Dashboard.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Sidebar from "./Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='w-1/5'>
        <Sidebar />
      </div>
      <div className='bg-white w-4/5 p-2'>
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
}

export default Dashboard;
