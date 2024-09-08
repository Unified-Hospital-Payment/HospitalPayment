import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api/api';

const ViewAllPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const usersData = await getAllUsers();
        const filteredPatients = usersData.filter(user => user.role === 'patient');
        setPatients(filteredPatients);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Patients</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {error && <p className="text-red-500 p-4">{error}</p>}
        {patients.length === 0 ? (
          <p className="p-4">No patients found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital ID</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {patients.map(patient => (
                  <tr key={patient.id} >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patient.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patient.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.phone_number}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.hospital_id || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllPatients;