import React, { useState } from "react";
import jsPDF from "jspdf";

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
        if (!value.trim()) return "Required";
        break;
      case "idNumber":
        if (!/^\d{13}$/.test(value)) return "ID must be 13 digits";
        break;
      case "phone":
        if (!/^(\+27|0)\d{9}$/.test(value)) return "Invalid phone number";
        break;
      case "location":
        if (!value) return "Select a location";
        break;
      case "otherLocation":
        if (formData.location === "OTHER" && !value.trim())
          return "Specify your location";
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
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const generatePDF = async (finalLocation) => {
  const pdf = new jsPDF();
  let y = 20;

  // 🔹 Load logo
  const loadImage = (file) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });

  // 🔹 Logo (if exists)
  try {
    const logo = await fetch("/src/assets/logo.png")
      .then((res) => res.blob())
      .then(loadImage);
    pdf.addImage(logo, "PNG", 14, 10, 30, 15);
  } catch {}

  // 🔹 Title
  pdf.setFontSize(16);
  pdf.text("APPLICATION FORM", 105, 18, { align: "center" });

  const appNumber = `APP-${new Date().getFullYear()}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;

  pdf.setFontSize(10);
  pdf.text(`Application No: ${appNumber}`, 14, 32);
  pdf.text(`Date: ${new Date().toLocaleDateString()}`, 150, 32);

  y = 42;
  pdf.setFontSize(11);

  const addLine = (label, value) => {
    pdf.text(`${label}:`, 14, y);
    pdf.text(String(value || "N/A"), 60, y);
    y += 7;
  };

  addLine("Full Name", formData.name);
  addLine("ID Number", formData.idNumber);
  addLine("Phone", formData.phone);
  addLine("Location", finalLocation);
  addLine("Address", formData.address);
  addLine("Disability", formData.disability);
  addLine("Next of Kin", formData.nextOfKin);

  y += 5;
  pdf.text("BANK DETAILS", 14, y);
  y += 7;
  addLine("Bank", "Capitec Business");
  addLine("Account Number", "1052131490");
  addLine("Reference", "Your Name & Surname");

  // 🔹 Attachments
  y += 10;
  pdf.text("ATTACHMENTS", 14, y);
  y += 8;

  if (formData.idCopy?.type.startsWith("image/")) {
    const idImg = await loadImage(formData.idCopy);
    pdf.text("ID Copy:", 14, y);
    y += 5;
    pdf.addImage(idImg, "JPEG", 14, y, 80, 60);
    y += 65;
  } else {
    addLine("ID Copy File", formData.idCopy?.name);
  }

  if (formData.proofOfPayment?.type.startsWith("image/")) {
    const popImg = await loadImage(formData.proofOfPayment);
    pdf.text("Proof of Payment:", 14, y);
    y += 5;
    pdf.addImage(popImg, "JPEG", 14, y, 80, 60);
    y += 65;
  } else {
    addLine("Proof File", formData.proofOfPayment?.name);
  }

  y += 10;
  pdf.setFontSize(9);
  pdf.text(
    "I declare that the information provided is true and correct.",
    14,
    y
  );

  pdf.save(`${appNumber}_${formData.name.replace(/\s+/g, "_")}.pdf`);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (!formData.idCopy) newErrors.idCopy = "Required";
    if (!formData.proofOfPayment) newErrors.proofOfPayment = "Required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const finalLocation =
        formData.location === "OTHER"
          ? formData.otherLocation
          : formData.location;

      generatePDF(finalLocation);

      const whatsappMessage = encodeURIComponent(
        `Hello, I have submitted my application.

Please find the generated PDF application attached.

Thank you.`
      );

      window.open(
        `https://wa.me/27765602702?text=${whatsappMessage}`,
        "_blank"
      );
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f8", padding: "20px" }}>
      <div style={{ maxWidth: "600px", margin: "auto", background: "#fff", padding: "30px", borderRadius: "12px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Application Form
        </h2>

        {/* Bank Details */}
<div
  style={{
    background: "#f0fdf4",
    border: "1px solid #bbf7d0",
    padding: "18px",
    borderRadius: "10px",
    marginBottom: "25px",
  }}
>
  <h3 style={{ marginBottom: "10px", color: "#065f46" }}>
    💳 Payment Details (Please Pay Before Submitting)
  </h3>

  <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#064e3b" }}>
    <p><strong>Bank:</strong> Capitec Business Account</p>
    <p><strong>Account Type:</strong> Transact</p>
    <p><strong>Account Number:</strong> 1052131490</p>
    <p><strong>SWIFT Code:</strong> CABLZAJJ</p>
    <p>
      <strong>Reference:</strong>{" "}
      <span style={{ fontWeight: "600", color: "#166534" }}>
        Your Name & Surname
      </span>
    </p>
  </div>

  <p
    style={{
      marginTop: "12px",
      fontSize: "13px",
      color: "#065f46",
      fontStyle: "italic",
    }}
  >
    ⚠️ Use your <strong>full name</strong> as reference and upload proof of
    payment below.
  </p>
</div>

        <form onSubmit={handleSubmit}>
          {["name", "idNumber", "phone", "address", "disability", "nextOfKin"].map((f) => (
            <div key={f} style={{ marginBottom: "14px" }}>
              <input
                name={f}
                placeholder={f.replace(/([A-Z])/g, " $1")}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px" }}
              />
              {errors[f] && <small style={{ color: "red" }}>{errors[f]}</small>}
            </div>
          ))}

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

          <div style={{ marginTop: "15px" }}>
            <label>ID Copy</label>
            <input type="file" name="idCopy" onChange={handleChange} />
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>Proof of Payment</label>
            <input type="file" name="proofOfPayment" onChange={handleChange} />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "14px",
              background: "#25D366",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
              fontWeight: "600",
            }}
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Apply;