import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUsers } from '../api/api'; // Update the import path if necessary

const ViewAllAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const usersData = await getAllUsers();
        const filteredAdmins = usersData.filter(user => user.role === 'hospital_admin');
        setAdmins(filteredAdmins);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  const handleButtonClick = () => {
    navigate('/dashboard/add-admin'); // Replace '/other-page' with the desired route
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Hospital Admins</h2>
        <button
          className="bg-[#500085] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#500085] transition"
          onClick={handleButtonClick}
        >
          Add Admins
        </button>
      </div>
      {admins.length === 0 ? (
        <p>No hospital administrators found.</p>
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
            {admins.map(admin => (
              <tr key={admin.id}>
                <td className="py-2 px-4 border-b">{admin.id}</td>
                <td className="py-2 px-4 border-b">{admin.name}</td>
                <td className="py-2 px-4 border-b">{admin.email}</td>
                <td className="py-2 px-4 border-b">{admin.phone_number}</td>
                <td className="py-2 px-4 border-b">{admin.hospital_id || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAllAdmins;
