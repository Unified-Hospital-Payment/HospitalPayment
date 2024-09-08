import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllServices } from '../api/api';

const ViewAllServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllServices();
        setServices(data);
      } catch (err) {
        setError('Failed to fetch services: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddService = () => {
    navigate('/dashboard/add-service');
  };

  return (
    <div className="flex flex-col gap-9 mt-20">
      <div className="bg-white shadow-default w-[60vw]">
        <div className="py-4 px-6.5 dark:border-strokedark flex justify-between items-center">
          <h3 className="font-bold text-3xl text-black">All Services</h3>
          <button
            onClick={handleAddService}
            className="bg-[#500085] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#500085] transition"
          >
            Add Service
          </button>
        </div>
        {error && <p className="text-red-500 px-6.5">{error}</p>}
        <div className="p-6.5">
          {loading ? (
            <p>Loading services...</p>
          ) : services.length === 0 ? (
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
