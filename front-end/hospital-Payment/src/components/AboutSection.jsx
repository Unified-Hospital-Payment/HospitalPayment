import React from 'react';
import Image1 from "../assets/unifiedimage1.jpg";
import Image2 from "../assets/unifiedimage2.jpg";

const AboutSection = () => {
  return (
    <div id="about" className="bg-[#500085] text-white min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mr-5">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About Us
            </h1>
            <p className="text-gray-400 text-lg">
            At HealthBlock, we provide a cutting-edge platform that facilitates seamless exchange of health data between patients and healthcare providers. 
            By leveraging blockchain technology, we ensure your personal information remains private, while integrating M-PESA for effortless and secure service payments. Our goal is to empower patients and providers with trusted, transparent, and efficient healthcare solutions.
            </p>
            <p className="text-gray-400 text-lg">
            With HealthBlock, you can manage your health data with confidence, knowing that privacy, security, and convenience are at the core of our services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={Image1}
              alt="Team working together"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={Image2}
              alt="Office workspace"
              className="w-full h-3/4 object-cover rounded-lg mt-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;