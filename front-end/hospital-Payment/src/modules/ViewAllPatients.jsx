import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getAllUsers } from '../api/api'; 

const ViewAllPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

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

  const handleButtonClick = () => {
    navigate('/dashboard/add-patient'); // Replace with the correct route for adding patients
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Patients</h2>
        <button
          className="bg-[#500085] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#500085] transition"
          onClick={handleButtonClick}
        >
          Add Patient
        </button>
      </div>
      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Hospital ID</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td className="py-2 px-4 border-b">{patient.id}</td>
                <td className="py-2 px-4 border-b">{patient.name}</td>
                <td className="py-2 px-4 border-b">{patient.email}</td>
                <td className="py-2 px-4 border-b">{patient.phone_number}</td>
                <td className="py-2 px-4 border-b">{patient.hospital_id || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAllPatients;
