import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Verify = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically make an API call to verify and update the password
    console.log('Verify form submitted:', formData)
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
        <div className="flex items-center justify-center min-h-screen">
          <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800">Verify Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    name="verificationCode"
                    placeholder="Verification Code"
                    value={formData.verificationCode}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <button
                    type="submit"
                    className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                  >
                    Verify and Update Password
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

export default Verify
