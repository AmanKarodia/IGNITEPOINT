import { db } from "../lib/firebaseAdmin";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Save to Firestore
    await db.collection("contactMessages").add({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // Send email via SendGrid (Gmail verified sender)
    await sgMail.send({
      to: process.env.CONTACT_RECEIVER_EMAIL, // can also be your gmail
      from: {
        email: "amankarodia212@gmail.com", // must be a verified sender in SendGrid
        name: "IGNITEPOINT",
      },
      subject: "New Candidate Contact Message",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}