import  { useEffect, useState } from 'react';
import { fetchAllHospitals, addUser } from '../api/api';

const AddAdmin = () => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    role: 'hospital_admin',
    password_hash: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const hospitalsData = await fetchAllHospitals();
        setHospitals(hospitalsData);
      } catch (err) {
        setError('Failed to fetch hospitals: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const submissionData = {
        ...formData,
        hospital_id: selectedHospital ? parseInt(selectedHospital, 10) : null,
        specialization: null // Ensure specialization is null for hospital_admin
      };
      await addUser(submissionData);
      setSuccess('Hospital Admin added successfully');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        role: 'hospital_admin',
        password_hash: '',
      });
      setSelectedHospital('');
    } catch (err) {
      setError('Failed to add Hospital Admin: ' + err.message);
    }
  };

  if (loading) return <p>Loading hospitals...</p>;

  return (
    <div className="flex flex-col gap-9 mt-20">
      <div className="bg-white shadow-default w-[60vw]">
        <div className="py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-bold text-3xl text-black">Add a Hospital Admin</h3>
        </div>
        {error && <p className="text-red-500 px-6.5">{error}</p>}
        {success && <p className="text-green-500 px-6.5">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Full name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                required
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Email <span className="text-meta-1">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                required
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Phone</label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Password</label>
              <input
                type="password"
                name="password_hash"
                value={formData.password_hash}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                required
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                className="w-full rounded border-[1.5px] py-3 px-5 text-black outline-none transition"
                readOnly
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Hospital</label>
              <select
                name="hospital_id"
                value={selectedHospital}
                onChange={(e) => setSelectedHospital(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                required
              >
                <option value="">Select a hospital</option>
                {hospitals.map((hospital) => (
                  <option key={hospital.id} value={hospital.id}>
                    {hospital.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="flex mt-2 w-full justify-center rounded p-3 font-medium text-white bg-[#500085]">
              Add Hospital Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;