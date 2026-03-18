import React from "react";
import Picture from "../assets/PICTURE.jpeg";

function Courses() {
  return (
    <div className="relative h-full w-full sm:h-full md:h-full lg:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={Picture}
        alt="Ignite Point Banner"
        className="w-full h-full object-fit object-center"
      />
    </div>
  );
}

export default Courses;