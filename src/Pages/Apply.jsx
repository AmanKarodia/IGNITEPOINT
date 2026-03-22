import React, { useState } from "react";

function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    phone: "",
    location: "",
    otherLocation: "",
    address: "",
    disability: "",
    nextOfKin: "",
    idCopy: null,
    proofOfPayment: null,
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
    "OTHER",
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
        if (!value) return "Please select a location";
        break;
      case "otherLocation":
        if (formData.location === "OTHER" && !value.trim())
          return "Please specify your location";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
      return;
    }

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

    if (!formData.idCopy) newErrors.idCopy = "ID copy is required";
    if (!formData.proofOfPayment)
      newErrors.proofOfPayment = "Proof of payment is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);

      const finalLocation =
        formData.location === "OTHER"
          ? formData.otherLocation
          : formData.location;

      const message = `
APPLICATION FORM SUBMISSION

Name: ${formData.name}
ID Number: ${formData.idNumber}
Phone: ${formData.phone}
Location: ${finalLocation}
Address: ${formData.address}
Disability: ${formData.disability || "N/A"}
Next of Kin: ${formData.nextOfKin}

ATTACHMENTS TO SEND:
• ID Copy: ${formData.idCopy.name}
• Proof of Payment: ${formData.proofOfPayment.name}

Bank Details Used:
Account Name: BLAUQTRADING
Bank: Standard Bank
Account Number: 000000000
Branch Code: 051001
Reference: Your Name & Surname
`;

      const whatsappUrl = `https://wa.me/27765602702?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank");
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f4f6f8", padding: "20px" }}>
      <div style={{ maxWidth: "600px", width: "100%", background: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 6px 24px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Application Form</h2>

        {/* Bank Details */}
        <div style={{ background: "#f9fafb", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
          <strong>Bank Details</strong>
          <p>Account Name: BLAUQTRADING</p>
          <p>Bank: Standard Bank</p>
          <p>Account Number: 000000000</p>
          <p>Branch Code: 051001</p>
          <p><strong>Reference:</strong> Your Name & Surname</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {[
            { label: "Name and Surname", name: "name" },
            { label: "ID Number", name: "idNumber" },
            { label: "Phone Number", name: "phone" },
            { label: "Address", name: "address", textarea: true },
            { label: "Disability (optional)", name: "disability" },
            { label: "Next of Kin", name: "nextOfKin" },
          ].map((f) => (
            <div key={f.name} style={{ marginBottom: "16px" }}>
              <label>{f.label}</label>
              {f.textarea ? (
                <textarea name={f.name} onChange={handleChange} style={{ width: "100%", padding: "10px" }} />
              ) : (
                <input name={f.name} onChange={handleChange} style={{ width: "100%", padding: "10px" }} />
              )}
              {errors[f.name] && <small style={{ color: "red" }}>{errors[f.name]}</small>}
            </div>
          ))}

          {/* Location */}
          <label>Location</label>
          <select name="location" onChange={handleChange} style={{ width: "100%", padding: "10px" }}>
            <option value="">Select location</option>
            {locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>

          {formData.location === "OTHER" && (
            <input
              name="otherLocation"
              placeholder="Enter your location"
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />
          )}

          {/* File uploads */}
          <div style={{ marginTop: "16px" }}>
            <label>ID Copy (Photo/PDF)</label>
            <input type="file" name="idCopy" accept="image/*,.pdf" onChange={handleChange} />
            {errors.idCopy && <small style={{ color: "red" }}>{errors.idCopy}</small>}
          </div>

          <div style={{ marginTop: "16px" }}>
            <label>Proof of Payment</label>
            <input type="file" name="proofOfPayment" accept="image/*,.pdf" onChange={handleChange} />
            {errors.proofOfPayment && <small style={{ color: "red" }}>{errors.proofOfPayment}</small>}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              background: "#25D366",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Submit via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Apply;