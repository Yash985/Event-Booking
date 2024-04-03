import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectToDB, Message } from "./DataBase/DataBase.js";

const app = express();
const port = 3000;
dotenv.config();

connectToDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  try {
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res
      .status(201)
      .json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    if (err.name === "ValidationError") {
      let errorMessage = "";
      if (err.errors.name) {
        errorMessage += err.errors.name.message + " ";
      }
      if (err.errors.email) {
        errorMessage += err.errors.email.message + " ";
      }
      if (err.errors.subject) {
        errorMessage += err.errors.subject.message + " ";
      }
      if (err.errors.message) {
        errorMessage += err.errors.message.message + " ";
      }
      return res.status(400).json({ success: false, message: errorMessage });
    }
    console.log(err);
    res.status(500).json({ success: false, message: "Unknown Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
