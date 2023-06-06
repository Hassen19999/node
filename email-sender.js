const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

const mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient-email@example.com",
  subject: "Test Email",
  text: "This is a test email sent from Node.js using nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});