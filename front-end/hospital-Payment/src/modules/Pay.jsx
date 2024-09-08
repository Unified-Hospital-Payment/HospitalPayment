import { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure you have axios installed

const Pay = () => {
  const [patient, setPatient] = useState({
    id: 1, // assuming patient id is available
    name: 'John Doe', // example name
  });
  const [services, setServices] = useState([
    { id: 1, name: 'Consultation', amount: 500 }, // Updated amounts
    { id: 2, name: 'X-Ray', amount: 1000 }, // Updated amounts
  ]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [paid, setPaid] = useState(false);
  const [phone, setPhone] = useState(''); // Added state for phone number

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = services.reduce((sum, service) => sum + service.amount, 0);
      setTotal(totalAmount);
    };
    calculateTotal();
  }, [services]);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setPaid(false);

    const payload = {
      phone,
      accountNumber: '123456789', // Example account number
      amount: total,
      userId: patient.id, // Adjust as needed
      hospitalId: 1, // Adjust as needed
      serviceId: services.find(service => service.name === 'Consultation')?.id || 1, // Example service ID
      doctorId: 7, // Example doctor ID
    };

    try {
      const response = await axios.post('https://b00d-197-237-107-2.ngrok-free.app/api/stkpush', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Payment response:', response.data); // Log the response for debugging
      setPaid(true);
    } catch (error) {
      console.error('Error making payment:', error);
      setPaid(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl">
        <div className="bg-[#500085] text-white py-4 px-6 rounded-t-lg">
          <h3 className="font-bold text-2xl">Invoice for {patient.name}</h3>
        </div>

        {!paid ? (
          <form onSubmit={handlePaymentSubmit} className="p-6">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Services</label>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id} className="flex justify-between text-gray-900">
                    <span>{service.name}</span>
                    <span>KES {service.amount}</span> {/* Updated currency */}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Total Amount</label>
              <p className="text-2xl font-semibold text-gray-900">KES {total}</p> {/* Updated currency */}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Payment Method</label>
              <select
                className="w-full border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                
                <option value="mobile_money">Mpesa</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#500085] hover:bg-[#500070] text-white font-medium py-3 rounded-lg transition duration-300"
            >
              Pay KES {total}
            </button>
          </form>
        ) : (
          <div className="p-6 text-center">
            <h4 className="text-green-600 font-bold text-2xl">Payment Successful</h4>
            <p className="text-gray-700 mt-4">
              Thank you for your payment, {patient.name}. You have paid KES {total}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay;
