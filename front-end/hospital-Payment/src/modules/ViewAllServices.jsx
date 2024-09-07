import React, { useState } from 'react'

const ViewAllServices = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  // Dummy data
  const dummyData = [
    { hospitalId: "H001", serviceCategory: "Emergency", description: "24/7 emergency care" },
    { hospitalId: "H002", serviceCategory: "Cardiology", description: "Heart and vascular health services" },
    { hospitalId: "H003", serviceCategory: "Pediatrics", description: "Specialized care for children" },
    { hospitalId: "H004", serviceCategory: "Oncology", description: "Cancer treatment and support" },
  ];

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };

  const closePopup = () => {
    setSelectedRow(null);
  };

  return (
    <div className="flex flex-col mt-10">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Hospital ID</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Service Category</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dummyData.map((row, index) => (
                  <tr key={index} onClick={() => handleRowClick(row)} className="cursor-pointer hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{row.hospitalId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{row.serviceCategory}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedRow && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={closePopup}>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Row Details</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  <strong>Hospital ID:</strong> {selectedRow.hospitalId}<br />
                  <strong>Service Category:</strong> {selectedRow.serviceCategory}<br />
                  <strong>Description:</strong> {selectedRow.description}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewAllServices
