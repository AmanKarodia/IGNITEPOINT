import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "27765602702"; // no + or spaces

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const whatsappMessage = `
New Contact Message

Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8">

        {/* LEFT SIDE */}
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
        <form onSubmit={handleWhatsAppSend} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={20} />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;