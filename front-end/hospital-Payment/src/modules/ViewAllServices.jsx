import React, { useState, useEffect } from 'react';
import { fetchAllServices } from '../api/api';

const ViewAllServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Services</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {error && <p className="text-red-500 p-4">{error}</p>}
        {services.length === 0 ? (
          <p className="p-4">No services available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map(service => (
                  <tr key={service.id}  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.hospital_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.doctor_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(service.created_at).toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(service.updated_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" >
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full" >
            <h2 className="text-2xl font-bold mb-4">Service Details</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedService.id}</p>
              <p><strong>Hospital ID:</strong> {selectedService.hospital_id}</p>
              <p><strong>Name:</strong> {selectedService.name}</p>
              <p><strong>Description:</strong> {selectedService.description}</p>
              <p><strong>Price:</strong> {selectedService.price}</p>
              <p><strong>Doctor ID:</strong> {selectedService.doctor_id}</p>
              <p><strong>Created At:</strong> {new Date(selectedService.created_at).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(selectedService.updated_at).toLocaleString()}</p>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAllServices;