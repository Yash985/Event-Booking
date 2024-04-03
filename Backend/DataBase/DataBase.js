import mongoose from "mongoose";
import dotenv from "dotenv";
import validator from "validator";

dotenv.config();
const DataBase_URL = process.env.DB_URL;

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: [3, "Name must be at least 3 characters long!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    validate: [validator.isEmail, "Please provide valid Email!"],
  },
  subject: {
    type: String,
    required: [true, "Subject is required!"],
    minLength: [5, "Subject must be at least 3 characters long!"],
  },
  message: {
    type: String,
    required: [true, "Message is required!"],
    minLength: [10, "Name must be at least 10 characters long!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);

export const connectToDB = async () => {
  try {
    await mongoose.connect(DataBase_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error while connecting to DB", err);
  }
};
