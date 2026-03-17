import { db } from "../lib/firebaseAdmin";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // 1️⃣ Save message to Firestore
    await db.collection("contactMessages").add({
      name,
      email,
      message,
      createdAt: new Date(),
      source: "website",
    });

    // 2️⃣ Send email via SendGrid (Gmail sender)
    await sgMail.send({
      to: process.env.CONTACT_RECEIVER_EMAIL, // your Gmail inbox
      from: {
        email: process.env.CONTACT_RECEIVER_EMAIL, 
        name: "IGNITEPOINT Website",
      },
      replyTo: email, // reply directly to the user
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return res.status(500).json({ error: "Server error" });
  }
}