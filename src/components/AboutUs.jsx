import React from "react";
import IMG_20260303_160657 from "../assets/IMG_20260303_160657.jpeg";

function AboutUs() {
  return (
    <section className="relative w-full">
      <div className="bg-white px-10 py-10 w-full flex flex-col md:flex-row items-center gap-6 space-x-2">
        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl sm:text-3xl font-bold text-black mb-2 py-10">
            About Us
          </h2>
          <p className="text-base sm:text-base text-black">
            Ignite Point was founded to address the growing need for digital skills in our community. Many people still lack the confidence and ability to use computers, limiting their access to education, jobs, and personal growth. 
            Our goal is to provide a welcoming, affordable space where anyone can learn essential computer skills and gain the confidence to participate fully in the digital world. 
            Ignite Point is about more than computers — it’s about opening doors to opportunity and a better future.
          </p>
          <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
        {/* Image */}
        <div className="flex-1 w-full flex justify-start sm:justify-center">
          <img
            src={IMG_20260303_160657}
            alt="Ignite Point Vision"
            className="h-full sm:h-full md:h-80 md:w-60 object-fit rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;