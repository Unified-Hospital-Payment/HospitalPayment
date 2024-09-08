import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchAllHospitals } from '../api/api';
import { useStore } from '../store/useStore';

const ViewAllHospitals = () => {
  const { hospitals, setHospitals } = useStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const getHospitals = async () => {
      try {
        const data = await fetchAllHospitals();
        setHospitals(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getHospitals();
  }, [setHospitals]);

  const handleButtonClick = () => {
    navigate('/dashboard/add-hospital'); // Replace with the desired route
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Hospitals</h1>
        <button
          className="bg-[#500085] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#500085] transition"
          onClick={handleButtonClick}
        >
          Add Hospital
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border-b py-2 px-4 text-left">ID</th>
            <th className="border-b py-2 px-4 text-left">Name</th>
            <th className="border-b py-2 px-4 text-left">Location</th>
            <th className="border-b py-2 px-4 text-left">Paybill Number</th>
            <th className="border-b py-2 px-4 text-left">Contact Info</th>
            <th className="border-b py-2 px-4 text-left">Created At</th>
            <th className="border-b py-2 px-4 text-left">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map(hospital => (
            <tr key={hospital.id}>
              <td className="border-b py-2 px-4">{hospital.id}</td>
              <td className="border-b py-2 px-4">{hospital.name}</td>
              <td className="border-b py-2 px-4">{hospital.location}</td>
              <td className="border-b py-2 px-4">{hospital.paybill_number}</td>
              <td className="border-b py-2 px-4">{hospital.contact_info}</td>
              <td className="border-b py-2 px-4">{new Date(hospital.created_at).toLocaleString()}</td>
              <td className="border-b py-2 px-4">{new Date(hospital.updated_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllHospitals;
