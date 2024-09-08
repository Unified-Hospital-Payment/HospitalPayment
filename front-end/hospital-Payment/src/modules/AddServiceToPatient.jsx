import { useEffect, useState } from 'react';
import { fetchAllServices, getAllUsers } from '../api/api'; // adjust the import path accordingly

const AddServiceToPatient = () => {
  const [services, setServices] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const serviceList = await fetchAllServices();
        const usersList = await getAllUsers();

        // Filter users to get only patients
        const patientList = usersList.filter(user => user.role === 'patient');

        setServices(serviceList);
        setPatients(patientList);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       // Add the service to the patient
//       const serviceData = {
//         patient_id: parseInt(selectedPatient, 10),
//         service_id: parseInt(selectedService, 10),
//         notes: notes.trim(),
//       };

//       // Assuming you have an API function `addServiceToPatient`
//       await addServiceToPatient(serviceData);

//       setSuccess('Service added successfully');
//       setSelectedPatient('');
//       setSelectedService('');
//       setNotes('');
//     } catch (error) {
//       setError('Error adding service to patient: ' + error.message);
//     }
//   };

  if (loading) return <p>Loading services and patients...</p>;

  return (
    <div className="flex flex-col gap-9 mt-20">
      <div className="bg-white shadow-default w-[60vw]">
        <div className="py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-bold text-3xl text-black">Add Service to Patient</h3>
        </div>
        {error && <p className="text-red-500 px-6.5">{error}</p>}
        {success && <p className="text-green-500 px-6.5">{success}</p>}
        <form > 
            {/* onSubmit={handleSubmit} */}
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Patient</label>
              <select
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                value={selectedPatient}
                onChange={(e) => setSelectedPatient(e.target.value)}
                required
              >
                <option value="">Select a patient</option>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.id}>
                    {patient.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Service</label>
              <select
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">Notes</label>
              <textarea
                placeholder="Add any relevant notes"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="flex mt-2 w-full justify-center rounded p-3 font-medium text-white bg-[#500085]"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceToPatient;
