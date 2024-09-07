import  { useEffect, useState } from 'react';
import { fetchAllHospitals } from '../api/api';
import {useStore} from "../store/useStore"

const ViewAllHospitals = () => {
    const {hospitals, setHospitals} = useStore()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Hospitals</h1>
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
