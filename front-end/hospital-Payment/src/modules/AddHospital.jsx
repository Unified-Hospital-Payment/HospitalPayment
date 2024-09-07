import { useState } from 'react';
import { addHospital } from '../api/api';  // Import the function

const AddHospital = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    paybill_number: '',
    contact_info: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addHospital(formData);  // Use the function from api.js
      console.log('Hospital added:', response);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-9 mt-20">
      <div className="bg-white shadow-default w-[60vw]">
        <div className="py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-bold text-3xl text-black">Add a Hospital</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full">
                <label className="mb-2.5 block text-black">Hospital Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter hospital name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                />
              </div>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Paybill Number</label>
              <input
                type="text"
                name="paybill_number"
                value={formData.paybill_number}
                onChange={handleChange}
                placeholder="Enter paybill number"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Contact Info</label>
              <input
                type="text"
                name="contact_info"
                value={formData.contact_info}
                onChange={handleChange}
                placeholder="Enter contact info"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
              />
            </div>

            <button
              type="submit"
              className="flex mt-2 w-full justify-center rounded p-3 font-medium text-white bg-[#500085]"
            >
              Add Hospital
            </button>

            {errorMessage && (
              <div className="mt-4 text-red-500">
                {errorMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHospital;
