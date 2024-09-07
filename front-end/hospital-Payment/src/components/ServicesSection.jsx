import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              
              <h2 className="mb-3 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What HealthBlock Offers
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Empowering patients and providers with trusted, transparent, and efficient healthcare solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Secure Health Data Exchange"
            details="Our platform facilitates seamless and secure exchange of health data between patients and healthcare providers, ensuring privacy and accessibility."
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2C9.716 2 3 8.716 3 17C3 25.284 9.716 32 18 32C26.284 32 33 25.284 33 17C33 8.716 26.284 2 18 2ZM14 24.29V9.71C14 8.766 15.073 8.223 15.88 8.764L26.13 16.054C26.855 16.54 26.855 17.46 26.13 17.946L15.88 25.236C15.073 25.777 14 25.234 14 24.29Z" fill="white"/>
              </svg>
            }
          />
          <ServiceCard
            title="Blockchain-Powered Security"
            details="Leveraging blockchain technology to ensure your personal health information remains private, secure, and tamper-proof."
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 12L18 4L6 12V24L18 32L30 24V12ZM18 27L9 22V14L18 19L27 14V22L18 27ZM18 23L9 18L18 13L27 18L18 23Z" fill="white"/>
              </svg>
            }
          />
          <ServiceCard
            title="M-PESA Integration"
            details="Seamless integration with M-PESA for effortless and secure payments for healthcare services, enhancing convenience for patients."
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 10C25 7.24 22.76 5 20 5H9C7.34 5 6 6.34 6 8V28C6 29.66 7.34 31 9 31H27C28.66 31 30 29.66 30 28V15C30 12.24 27.76 10 25 10ZM20 5C22.76 5 25 7.24 25 10H20V5ZM27 28H9V8H17V10C17 11.66 18.34 13 20 13H27V28Z" fill="white"/>
              </svg>
            }
          />
          <ServiceCard
            title="Patient Empowerment"
            details="Giving patients control over their health data, enabling informed decision-making and better collaboration with healthcare providers."
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM23.79 21.21L19.5 18.21C19.19 18 19 17.67 19 17.32V10C19 9.45 19.45 9 20 9H22C22.55 9 23 9.45 23 10V15.1L25.79 16.89C26.24 17.19 26.37 17.79 26.07 18.24L24.24 20.93C23.94 21.38 23.34 21.51 22.89 21.21H23.79Z" fill="white"/>
              </svg>
            }
          />
          <ServiceCard
            title="Transparent Healthcare"
            details="Promoting transparency in healthcare processes, from appointments to treatments, fostering trust between patients and providers."
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 11V8C31 6.34 29.66 5 28 5H8C6.34 5 5 6.34 5 8V28C5 29.66 6.34 31 8 31H28C29.66 31 31 29.66 31 28V25L33 27V9L31 11ZM28 28H8V8H28V28ZM26 18L18 24V12L26 18Z" fill="white"/>
              </svg>
            }
          />
          <ServiceCard
            title="Efficient Healthcare Solutions"
            details="Streamlining healthcare processes to save time and resources for both patients and providers, leading to more effective care delivery."
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.41 4L16 5.41L20.58 10H12C7.03 10 3 14.03 3 19C3 23.97 7.03 28 12 28H24C28.97 28 33 23.97 33 19C33 14.03 28.97 10 24 10H23.42L28 5.41L26.59 4L21 9.59L17.41 4ZM12 13H24C27.31 13 30 15.69 30 19C30 22.31 27.31 25 24 25H12C8.69 25 6 22.31 6 19C6 15.69 8.69 13 12 13Z" fill="white"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-9 rounded-[20px] shadow-lg bg-[#500085] p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
        <div className="mb-8 flex h-[70px] w-[70px]  items-center justify-center rounded-2xl bg-black">
          {icon}
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold text-white ">
          {title}
        </h4>
        <p className="text-white">{details}</p>
      </div>
    </div>
  );
};