import React from "react";

function WhyUs() {
  const stats = [
    { number: "2", label: "Partners Affiliated" },
    { number: "34", label: "Graduates" },
    { number: "16", label: "Attending Currently" },
    { number: "1", label: "Regions Covered" },
  ];

  return (
    <div className="relative mt-10">
      {/* Heading */}
      <div className="text-start px-6 sm:px-12 md:px-20 lg:px-32">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl mt-5 lg:mt-10 tracking-wide font-bold">
          Why Choose Us
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-center px-6 sm:px-12 md:px-20 lg:px-32">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-700">
              {stat.number}
            </h3>
            <p className="text-neutral-400 text-sm mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;