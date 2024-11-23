import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/user.route.js";
import policyRoute from "./routes/policy.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cron from "node-cron";
import nodemailer from "nodemailer";
import { Policy } from "./models/policy.model.js"; // Import the model
import { User } from "./models/user.model.js";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  credentials: true,
};
app.use(cors(corsOption));

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/policy", policyRoute);

// Email Setup
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your email password or app password
  },
});

// Function to calculate next installment date based on policy start date and installment frequency
const getNextInstallmentDate = (startDate, installmentDuration) => {
  const nextInstallmentDate = new Date(startDate);

  switch (installmentDuration) {
    case "monthly":
      nextInstallmentDate.setMonth(nextInstallmentDate.getMonth() + 1);
      break;
    case "3 months":
      nextInstallmentDate.setMonth(nextInstallmentDate.getMonth() + 3);
      break;
    case "annually":
      nextInstallmentDate.setFullYear(nextInstallmentDate.getFullYear() + 1);
      break;
    default:
      break;
  }
  return nextInstallmentDate;
};

// Cron job runs every day at 1 (to check if any installment is due)
cron.schedule("7 13 * * *", async () => {
  console.log("Running cron job to check installment dates...");

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure we're comparing just the date (ignoring time)

    // Fetch all active policies and loop through them
    const policies = await Policy.find();

    for (const policy of policies) {
      // Calculate the next installment date based on the policy start date and installment duration
      const nextInstallmentDate = getNextInstallmentDate(
        policy.startDate,
        policy.installmentDuration
      );

      // Check if today's date matches the next installment date
      if (nextInstallmentDate.toDateString() === today.toDateString()) {
        // Populate the associated user details
        const user = await User.findById(policy.user);

        // Ensure user exists and has an email
        if (user && user.email) {
          // Send Email
          const mailOptions = {
            from: process.env.EMAIL,
            to: user.email, // Email from the User model
            subject: `Installment Due Reminder for Policy: ${policy.policyNumber}`,
            text: `Dear ${user.name},\n\nThis is a reminder that your installment of ₹${policy.installmentAmount} for the policy "${policy.policyName}" is due today. Please make your payment to avoid penalties.\n\nThank you,\nYour Insurance Provider`,
          };

          await transporter.sendMail(mailOptions);
          console.log(`Email sent to ${user.email}`);
        } else {
          console.error(`No valid email found for user ID: ${policy.user}`);
        }
      }
    }
  } catch (error) {
    console.error("Error running cron job:", error);
  }
});

// Start Server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening at port ${PORT}`);
});
