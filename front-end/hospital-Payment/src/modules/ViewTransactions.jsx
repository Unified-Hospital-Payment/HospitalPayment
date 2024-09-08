import { useState, useEffect } from 'react';

const ViewTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call with dummy data
    const dummyTransactions = [
      {
        id: 1,
        payment_id: 101,
        blockchain_txn_id: '0xabc123def456',
        block_number: '123456',
        timestamp: new Date(),
        status: 'Completed',
      },
      {
        id: 2,
        payment_id: 102,
        blockchain_txn_id: '0xdef789ghi012',
        block_number: '789101',
        timestamp: new Date(),
        status: 'Pending',
      },
      {
        id: 3,
        payment_id: 103,
        blockchain_txn_id: '0xghi345jkl678',
        block_number: '111213',
        timestamp: new Date(),
        status: 'Failed',
      },
    ];

    // Simulate loading
    setTimeout(() => {
      setTransactions(dummyTransactions);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p>Loading...</p>;

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
            <th className="py-2 px-4 border-b">Payment ID</th>
            <th className="py-2 px-4 border-b">Blockchain Txn ID</th>
            <th className="py-2 px-4 border-b">Block Number</th>
            <th className="py-2 px-4 border-b">Timestamp</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border-b">{transaction.id}</td>
              <td className="py-2 px-4 border-b">{transaction.payment_id || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{transaction.blockchain_txn_id || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{transaction.block_number || 'N/A'}</td>
              <td className="py-2 px-4 border-b">
                {transaction.timestamp ? transaction.timestamp.toLocaleString() : 'N/A'}
              </td>
              <td className="py-2 px-4 border-b">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransactions;
