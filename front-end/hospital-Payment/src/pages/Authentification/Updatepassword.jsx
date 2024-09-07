import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Updatepassword = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically make an API call to update the password
    console.log('Update password form submitted:', formData)
    setShowPopup(true)
  }

  const handlePopupClose = () => {
    setShowPopup(false)
    navigate('/login')
  }

  return (
    <>
      <Navbar />
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 w-full h-full bg-gradient-radial from-[#500085] to-[#12001f]"></div>
        </div>
        <div className="flex items-start justify-center min-h-screen bg-transparent">
      <div className="w-full max-w-md bg-white bg-opacity-10 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Update Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-white">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="mt-4">
                <label htmlFor="newPassword" className="block text-sm font-medium text-white">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="mt-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="flex items-baseline justify-between my-9 ">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
                    Update Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Success!</h2>
            <p className="text-gray-600">Your password has been successfully updated.</p>
            <button
              onClick={handlePopupClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Updatepassword
