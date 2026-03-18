import React from "react";
import IMG_20260303_160724 from "../assets/IMG_20260303_160724.jpeg";

function OurVision() {

  const handleApplyClick = () => {
    // Navigate to the enquiry page
    window.location.href = "/Apply";
  }

  return (
    <section className="relative w-full">
      <div className="bg-white px-10 py-10 w-full flex flex-col md:flex-row items-center gap-6 space-x-2">
        {/* Image */}
        <div className="flex-1 w-full flex justify-end sm:justify-center">
          <img
            src={IMG_20260303_160724}
            alt="Ignite Point Vision"
            className="h-full sm:h-full md:h-80 md:w-60 object-fit rounded-2xl"
          />
        </div>
        
        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl sm:text-3xl font-bold text-black mb-2 py-10">
            Our Vision & Mission
          </h2>
          <p className="text-base sm:text-base text-black">
            To empower individuals and businesses with accessible, reliable, and affordable
            computer solutions. We are committed to providing high-quality training that
            bridge the gap between technology and everyday life. Through excellence,
            integrity, and a passion for learning, we aim to equip our community with the
            skills and tools needed to thrive in an ever-evolving digital world.
            create an environment where individuals and businesses can harness the full pot
            ential of modern computing.
          </p>
          <button onClick={handleApplyClick} className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>


      </div>
    </section>
  );
}

export default OurVision;