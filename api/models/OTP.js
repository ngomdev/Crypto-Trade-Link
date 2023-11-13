import mongoose from "mongoose";

// Define a schema for the OTP(One Time Password)
const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
	// Send the email using our custom mailSender Function
	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email",
			`<html>
        <head>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    padding: 20px;
                }
                h1 {
                    color: #4285f4;
                }
                p {
                    margin-bottom: 10px;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    margin-top: 10px;
                }
            </style>
        </head>
        <body>
            <h1>Please confirm your OTP</h1>
            <p>Here is your OTP code:</p>
            <p><strong>${otp}</strong></p>
            <p><img src="https://example.com/path/to/your/image.png" alt="Image description"></p>
        </body>
    </html>`
		);
		console.log("Email sent successfully: ", mailResponse);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
