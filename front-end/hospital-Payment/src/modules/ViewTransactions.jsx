import { useState, useEffect } from 'react';
import { fetchAllTransactions,fetchAllHospitals,getAllUsers,fetchAllServices } from '../api/api';


const ViewTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [transactionsData, hospitalsData, usersData, servicesData] = await Promise.all([
          fetchAllTransactions(),
          fetchAllHospitals(),
          getAllUsers(),
          fetchAllServices()
        ]);

        setTransactions(transactionsData);
        setHospitals(hospitalsData);
        setUsers(usersData);
        setServices(servicesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  const getHospitalName = (id) => hospitals.find(hospital => hospital.id === id)?.name || 'N/A';
  const getUserName = (id) => users.find(user => user.id === id)?.name || 'N/A';
  const getServiceName = (id) => services.find(service => service.id === id)?.name || 'N/A';

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Transactions</h2>
        <button
          onClick={() => {}}
          className="bg-[#500085] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#400066] transition"
        >
          Add Transaction
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">Hospital</th>
            <th className="py-2 px-4 border-b">Service</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Payment Status</th>
            <th className="py-2 px-4 border-b">Transaction ID</th>
            <th className="py-2 px-4 border-b">Created At</th>
            <th className="py-2 px-4 border-b">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border-b">{transaction.id}</td>
              <td className="py-2 px-4 border-b">{getUserName(transaction.user_id)}</td>
              <td className="py-2 px-4 border-b">{getHospitalName(transaction.hospital_id)}</td>
              <td className="py-2 px-4 border-b">{getServiceName(transaction.service_id)}</td>
              <td className="py-2 px-4 border-b">KES {transaction.amount}</td>
              <td className="py-2 px-4 border-b">{transaction.payment_status}</td>
              <td className="py-2 px-4 border-b">{transaction.transaction_id}</td>
              <td className="py-2 px-4 border-b">{new Date(transaction.created_at).toLocaleString()}</td>
              <td className="py-2 px-4 border-b">{new Date(transaction.updated_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransactions;
