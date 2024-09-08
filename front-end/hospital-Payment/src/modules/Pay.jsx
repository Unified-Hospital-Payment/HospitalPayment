import { useState, useEffect } from 'react';

const Pay = () => {
  const [patient, setPatient] = useState({
    id: 1, // assuming patient id is available
    name: 'John Doe', // example name
  });
  const [services, setServices] = useState([
    { id: 1, name: 'Consultation', amount: 50 },
    { id: 2, name: 'X-Ray', amount: 100 },
  ]); // Example services that the patient has received
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = services.reduce((sum, service) => sum + service.amount, 0);
      setTotal(totalAmount);
    };
    calculateTotal();
  }, [services]);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Mock payment submission logic
    setPaid(true);
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
              <label className="block text-gray-700 text-sm font-medium mb-2">Patient ID</label>
              <p className="text-gray-900 text-lg">{patient.id}</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Services</label>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id} className="flex justify-between text-gray-900">
                    <span>{service.name}</span>
                    <span>${service.amount}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Total Amount</label>
              <p className="text-2xl font-semibold text-gray-900">${total}</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Payment Method</label>
              <select
                className="w-full border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="mobile_money">Mobile Money</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#500085] hover:bg-[#500070] text-white font-medium py-3 rounded-lg transition duration-300"
            >
              Pay ${total}
            </button>
          </form>
        ) : (
          <div className="p-6 text-center">
            <h4 className="text-green-600 font-bold text-2xl">Payment Successful</h4>
            <p className="text-gray-700 mt-4">
              Thank you for your payment, {patient.name}. You have paid ${total}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay;
