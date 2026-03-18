import React, { useState } from "react";

function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    phone: "",
    location: "",
    address: "",
    disability: "",
    nextOfKin: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const locations = [
    "MGANDUZWENI",
    "PHOLA",
    "CHOCHOHO",
    "NUMBI",
    "MAHUSHU",
    "KAMPHATSENI",
    "MSHADZA",
    "MGCOBANENI",
    "SWALALA",
    "JERUSALEM",
    "SALUBINDZA",
    "KAMAJIKA",
  ];

  const validateField = (name, value) => {
    switch (name) {
      case "name":
      case "address":
      case "nextOfKin":
        if (!value.trim()) return "This field is required";
        break;
      case "idNumber":
        if (!/^\d{13}$/.test(value)) return "ID Number must be 13 digits";
        break;
      case "phone":
        if (!/^(\+27|0)\d{9}$/.test(value))
          return "Phone number must start with +27 or 0 and have 9 digits";
        break;
      case "location":
        if (!value) return "Please select a province";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);

      // Create WhatsApp message
      const message = `
Application Form Submission:
Name: ${formData.name}
ID Number: ${formData.idNumber}
Phone: ${formData.phone}
Location: ${formData.location}
Address: ${formData.address}
Disability: ${formData.disability || "N/A"}
Next of Kin: ${formData.nextOfKin}
      `;
      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "+27765602702"; // Replace with your number including country code, e.g., 27821234567
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f4f6f8", padding: "20px" }}>
      <div style={{ maxWidth: "600px", width: "100%", background: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>Application Form</h2>
        {submitted && <div style={{ marginBottom: "20px", color: "green", fontWeight: "600" }}>Redirecting to WhatsApp...</div>}
        <form onSubmit={handleSubmit} noValidate>
          {[
            { label: "Name and Surname", name: "name", type: "text", placeholder: "John Doe" },
            { label: "ID Number", name: "idNumber", type: "text", placeholder: "1234567890123" },
            { label: "Phone Number", name: "phone", type: "tel", placeholder: "+27 82 123 4567" },
            { label: "Address", name: "address", type: "textarea", placeholder: "Street, Suburb, City" },
            { label: "Disability (if any)", name: "disability", type: "text", placeholder: "Specify if applicable", optional: true },
            { label: "Next of Kin", name: "nextOfKin", type: "text", placeholder: "Full Name and Contact" },
          ].map((field) => (
            <div key={field.name} style={{ marginBottom: "18px" }}>
              <label style={{ display: "block", marginBottom: "6px", color: "#555", fontWeight: "500" }}>
                {field.label}{!field.optional && ":"}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: errors[field.name] ? "1px solid red" : "1px solid #ccc",
                    fontSize: "14px",
                  }}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: errors[field.name] ? "1px solid red" : "1px solid #ccc",
                    fontSize: "14px",
                  }}
                />
              )}
              {errors[field.name] && <div style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors[field.name]}</div>}
            </div>
          ))}

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", color: "#555", fontWeight: "500" }}>Location (Province):</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: errors.location ? "1px solid red" : "1px solid #ccc",
                fontSize: "14px",
              }}
            >
              <option value="">Select a province</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            {errors.location && <div style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.location}</div>}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#25D366",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Submit to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Apply;