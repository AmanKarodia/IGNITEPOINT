import React from "react";
import classroomVideo from "../assets/WhatsApp.mp4"; // Ensure you have a video file in this path

function ClassroomRef() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-10">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Our Classroom in Action
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          A look into our learning environment and hands-on training sessions.
        </p>
      </div>

      {/* Video */}
      <div className="max-w-5xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-xl aspect-video shadow-lg">
          <iframe
            src={classroomVideo          }
            title="Ignite Point Classroom"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

    </section>
  );
}

export default ClassroomRef;