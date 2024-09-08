import { useState, useEffect } from 'react';
import { addService, fetchAllHospitals, getAllUsers } from '../api/api';

const AddService = () => {
  const [formData, setFormData] = useState({
    hospital_id: '',
    name: '',
    description: '',
    price: '',
    doctor_id: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hospitals and users (doctors)
        const [hospitalsData, usersData] = await Promise.all([fetchAllHospitals(), getAllUsers()]);
        
        // Filter users to only include doctors
        const filteredDoctors = usersData.filter(user => user.role === 'doctor');
        
        
        setHospitals(hospitalsData);
        setDoctors(filteredDoctors);
      } catch (error) {
        setError('Failed to fetch data: ' + error.message);
      }
    };

    fetchData();
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
      const response = await addService({
        ...formData,
        hospital_id: parseInt(formData.hospital_id),
        price: parseFloat(formData.price),
        doctor_id: parseInt(formData.doctor_id)
      });
      setSuccess('Service added successfully');
      setFormData({
        hospital_id: '',
        name: '',
        description: '',
        price: '',
        doctor_id: ''
      });
    } catch (err) {
      setError('Failed to add service: ' + err.message);
    }
  };

  return (
    <div className="flex flex-col gap-9 mt-20">
      <div className="bg-white shadow-default w-[60vw]">
        <div className="py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-bold text-3xl text-black">
            Add a Service
          </h3>
        </div>
        {error && <p className="text-red-500 px-6.5">{error}</p>}
        {success && <p className="text-green-500 px-6.5">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Service Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter service name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter service description"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter service price"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Hospital
              </label>
              <select
                name="hospital_id"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                value={formData.hospital_id}
                onChange={handleChange}
                required
              >
                <option value="">Select Hospital</option>
                {hospitals.map(hospital => (
                  <option key={hospital.id} value={hospital.id}>
                    {hospital.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Doctor
              </label>
              <select
                name="doctor_id"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                value={formData.doctor_id}
                onChange={handleChange}
                required
              >
                <option value="">Select Doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="flex mt-2 w-full justify-center rounded p-3 font-medium text-white bg-[#500085]">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
