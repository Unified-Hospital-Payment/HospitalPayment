import React, { useState, useEffect } from 'react';
import { fetchAllServices } from '../api/api';

const ViewAllServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllServices();
        setServices(data);
      } catch (err) {
        setError('Failed to fetch services: ' + err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-9 mt-20">
      <div className="bg-white shadow-default w-[60vw]">
        <div className="py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-bold text-3xl text-black">All Services</h3>
        </div>
        {error && <p className="text-red-500 px-6.5">{error}</p>}
        <div className="p-6.5">
          {services.length === 0 ? (
            <p>No services available.</p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Hospital ID</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Doctor ID</th>
                  <th className="border p-2">Created At</th>
                  <th className="border p-2">Updated At</th>
                </tr>
              </thead>
              <tbody>
                {services.map(service => (
                  <tr key={service.id}>
                    <td className="border p-2">{service.id}</td>
                    <td className="border p-2">{service.hospital_id}</td>
                    <td className="border p-2">{service.name}</td>
                    <td className="border p-2">{service.description}</td>
                    <td className="border p-2">{service.price}</td>
                    <td className="border p-2">{service.doctor_id}</td>
                    <td className="border p-2">{new Date(service.created_at).toLocaleString()}</td>
                    <td className="border p-2">{new Date(service.updated_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewAllServices;
