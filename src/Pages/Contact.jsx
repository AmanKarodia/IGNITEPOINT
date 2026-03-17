import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function ContactPage() {

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8">
        
        {/* LEFT SIDE - INFO */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch
          </h1>
          <p className="text-gray-600">
            Have a question, business inquiry, or need support? Reach out and
            we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> p.bongani1@gmail.com</p>
            <p><strong>Phone:</strong> +27 76 560 2702</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
          <a
              href="https://wa.me/27765602702"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto h-auto bg-white text-green-600 border py-3 px-3 rounded-full flex items-center"
            >
              <FaWhatsapp size={24} className="inline-block mr-2" />
              WhatsApp
            </a>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;