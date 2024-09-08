import { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
import { fetchAllServices, getAllUsers, addPatientConsultation } from '../api/api'; // Adjust the import path accordingly

const AddServiceToPatient = () => {
    const { userId } = useStore();
    const [services, setServices] = useState([]);
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]); // Added state for doctors
    const [selectedPatient, setSelectedPatient] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState(''); // Added state for selected doctor
    const [selectedService, setSelectedService] = useState('');
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const serviceList = await fetchAllServices();
                const usersList = await getAllUsers();

                // Filter users to get only patients and doctors
                const patientList = usersList.filter(user => user.role === 'patient');
                const doctorList = usersList.filter(user => user.role === 'doctor');
                
                setServices(serviceList);
                setPatients(patientList);
                setDoctors(doctorList); // Set the list of doctors
                setLoading(false);
            } catch (error) {
                setError('Error fetching data: ' + error.message);
                setLoading(false);
            }
        };
        loadInitialData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const serviceData = {
                patient_id: parseInt(selectedPatient, 10),
                doctor_id: parseInt(selectedDoctor, 10), // Use selected doctor ID
                reason: selectedService, // Use service name as the reason
                notes: notes.trim(),
                status: status.trim()
            };

            await addPatientConsultation(serviceData);

            setSuccess('Service added to patient successfully');
            setSelectedPatient('');
            setSelectedDoctor(''); // Clear selected doctor
            setSelectedService('');
            setNotes('');
            setStatus('');
        } catch (error) {
            setError('Error adding service to patient: ' + error.message);
        }
    };

    if (loading) return <p>Loading services and patients...</p>;

    return (
        <div className="flex flex-col gap-9 mt-20">
            <div className="bg-white shadow-default w-[60vw]">
                <div className="py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-bold text-3xl text-black">Add Service to Patient</h3>
                </div>
                {error && <p className="text-red-500 px-6.5">{error}</p>}
                {success && <p className="text-green-500 px-6.5">{success}</p>}
                <form onSubmit={handleSubmit}>
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
                            <label className="mb-2.5 block text-black">Doctor</label>
                            <select
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                                value={selectedDoctor}
                                onChange={(e) => setSelectedDoctor(e.target.value)}
                                required
                            >
                                <option value="">Select a doctor</option>
                                {doctors.map(doctor => (
                                    <option key={doctor.id} value={doctor.id}>
                                        {doctor.name}
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
                                    <option key={service.id} value={service.name}>
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

                        <div className="mb-4.5">
                            <label className="mb-2.5 block text-black">Status</label>
                            <input
                                type="text"
                                placeholder="Enter status"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
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
