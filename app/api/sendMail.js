// pages/api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle POST request
    const { firstName, lastName, email, company, phone, message } = req.body;
    console.log("Received form data:", {
      firstName,
      lastName,
      email,
      company,
      phone,
      message,
    });

    // Create a Nodemailer transporter using SMTP or other transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "primegroupforms@gmail.com",
        pass: "sdey ynno zxhg jywb",
      },
    });

    // Define email content
    let mailOptions = {
      from: "primegroupforms@gmail.com",
      to: "baraiayush541@gmail.com",
      subject: "New Contact Form Submission",
      html: `
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
    };

    try {
      // Send email
      let info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);

      // Respond with success message
      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      // Respond with error message
      res.status(500).json({ message: "Error sending email." });
    }
  } else {
    // Method not allowed
    res.status(405).end();
  }
}
