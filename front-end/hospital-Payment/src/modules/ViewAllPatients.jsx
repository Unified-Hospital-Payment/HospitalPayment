import React from 'react'

const ViewAllPatients = () => {
  return (
    <div className="flex flex-col mt-10">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Patient ID</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Patient</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Doctor</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Service</th>
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">1234</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Janes Bridge</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">James</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">0x345...96</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Kshs.56,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Download Transaction</button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">1234</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Janes Bridge</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">James</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">0x345...96</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Kshs.56,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Download Transaction</button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">1234</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Janes Bridge</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">James</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">0x345...96</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Kshs.56,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Download Transaction</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default ViewAllPatients
