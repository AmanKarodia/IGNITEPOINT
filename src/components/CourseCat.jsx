import React from "react";
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

const modules = [
  { name: "Computer Operation Skills", icon: <Monitor size={26} /> },
  { name: "Setting Up a Computer System", icon: <Settings size={26} /> },
  { name: "Installing Software", icon: <Download size={26} /> },
  { name: "Typing Master", icon: <Keyboard size={26} /> },
  { name: "MS Word", icon: <FileText size={26} /> },
  { name: "MS Excel", icon: <Table size={26} /> },
  { name: "MS PowerPoint", icon: <Presentation size={26} /> },
  { name: "MS Publisher", icon: <Layout size={26} /> },
  { name: "Outlook", icon: <Mail size={26} /> },
  { name: "MS Access", icon: <Database size={26} /> },
];

const COURSE_PRICE = 1500;
const REGISTRATION_FEE = 300;

function CourseCat() {
  const totalPrice = COURSE_PRICE + REGISTRATION_FEE;

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Basic Computer Training Course
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          3 Months • Practical Skills • Job-ready • Certificate Included
        </p>

        {/* Price Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 inline-block mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-800">
            <div className="text-center">
              <p className="text-sm">Course Fee</p>
              <p className="text-xl font-semibold">R{COURSE_PRICE}</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Registration Fee</p>
              <p className="text-xl font-semibold">R{REGISTRATION_FEE}</p>
            </div>
            <div className="text-center bg-blue-50 rounded-xl px-4 py-2">
              <p className="text-sm">Total</p>
              <p className="text-2xl font-bold text-blue-700">R{totalPrice}</p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center transform transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-2">
                {mod.icon}
              </div>
              <span className="text-sm text-gray-700 text-center">{mod.name}</span>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Certificate Included
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
            Beginner-Friendly
          </span>
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
            Practical Skills
          </span>
        </div>

        {/* WhatsApp Enroll Button */}
        <a
          href={`https://wa.me/27765602702?text=${encodeURIComponent(
            `Hello, I would like to enroll for the Basic Computer Training Course.

Course Fee: R${COURSE_PRICE}
Registration Fee: R${REGISTRATION_FEE}
Total: R${totalPrice}
Duration: 3 Months

Please assist me with registration.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white py-3 px-8 text-lg font-semibold rounded-xl shadow-md hover:bg-green-600 hover:scale-105 transition transform"
        >
          Enroll via WhatsApp
        </a>
      </div>
    </section>
  );
}

export default CourseCat;