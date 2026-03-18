import React, { useState } from "react";
import { Link } from 'react-router-dom';

import {
  Monitor,
  Settings,
  Download,
  Keyboard,
  FileText,
  Table,
  Presentation,
  Layout,
  Mail,
  Database,
  Award,
} from "lucide-react";

const courses = [
  {
    title: "Computer Operation Skills",
    level: "Beginner",
    price: "R1,500",
    duration: "3 Months",
    icon: <Monitor size={26} />,
  },
  {
    title: "Setting Up a Computer System",
    level: "Beginner",
    price: "R1,500",
    duration: "3 Months",
    icon: <Settings size={26} />,
  },
  {
    title: "Installing Software",
    level: "Beginner",
    price: "R1,500",
    duration: "3 Months",
    icon: <Download size={26} />,
  },
  {
    title: "Typing Master",
    level: "Beginner",
    price: "R1,500",
    duration: "3 Months",
    icon: <Keyboard size={26} />,
  },
  {
    title: "MS Word",
    level: "Beginner",
    price: "R1,500",
    duration: "3 Months",
    icon: <FileText size={26} />,
  },
  {
    title: "MS Excel",
    level: "Intermediate",
    price: "R1,500",
    duration: "3 Months",
    icon: <Table size={26} />,
  },
  {
    title: "MS PowerPoint",
    level: "Beginner",
    price: "R1,500",
    duration: "3 Months",
    icon: <Presentation size={26} />,
  },
  {
    title: "MS Publisher",
    level: "Intermediate",
    price: "R1,500",
    duration: "3 Months",
    icon: <Layout size={26} />,
  },
  {
    title: "Outlook",
    level: "Beginner",
    price: "1,500",
    duration: "3 Months",
    icon: <Mail size={26} />,
  },
  {
    title: "MS Access",
    level: "Intermediate",
    price: "R1,500",
    duration: "3 Months",
    icon: <Database size={26} />,
  },
];

function CourseCat() {
  const [filter, setFilter] = useState("All");

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((course) => course.level === filter);

  return (
    <section className="w-full py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Computer Training Courses
          </h2>
          <p className="mt-2 text-gray-600">
            Practical skills • Certified • Job-ready
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Beginner", "Intermediate"].map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === level
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-700 hover:bg-gray-100"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>

                {/* Level */}
                <span
                  className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${
                    course.level === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {course.level}
                </span>

                {/* Info */}
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  <p>
                    💰 Price: <strong>{course.price}</strong>
                  </p>
                  <p>
                    ⏳ Duration: <strong>{course.duration}</strong>
                  </p>
                </div>

                {/* Certificate */}
                <div className="flex items-center gap-2 mt-4 text-sm text-blue-600">
                  <Award size={18} />
                  Certificate Included
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href={`https://wa.me/27765602702?text=${encodeURIComponent(
                    `Hello, I would like to enroll for the following course:

Course: ${course.title}
Level: ${course.level}
Price: ${course.price}
Duration: ${course.duration}

Please assist me with registration.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Enroll via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseCat;