import React from 'react'

const AddDoctor = () => {
  return (
    <div className="flex flex-col gap-9 mt-20">
          {/* <!-- Contact Form --> */}
          <div className=" bg-white shadow-default w-[60vw]">
            <div className=" py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-bold text-3xl text-black ">
                Add a Patient
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-2.5 block text-black">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black "
                    />
                  </div>

                  
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black "
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black ">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black "
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black ">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black "
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black ">
                    Role
                  </label>
                  <input
                    type="text"
                    value="doctor"
                   
                    className="w-full rounded border-[1.5px]  py-3 px-5 text-black outline-none transition  "
                  />
                </div>

                

                <button className="flex mt-2 w-full justify-center rounded  p-3 font-medium text-white bg-[#500085]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default AddDoctor
