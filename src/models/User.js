const mongoose = require("mongoose");

const clgSchema = new mongoose.Schema(
  {
    studentid: {
      type: String,
    },
    userName: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      match: [/^[A-Za-z]{3,25}$/, "First Name  At last 3 to 25 characters."],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      match: [/^[A-Za-z]{3,15}$/, "Last Name  At last 3 to 15 characters."],
      
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format."],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      match: [/^[0-9]{6,13}$/, "Enter Valid Phone Number"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],    
    },
    profileHistory: {
      type: Array,
      required: false,
    },
    profile: {
      type: Array,
      required: false,
    },
    document: {
      type: Array,
      required: false,
    },  
    otp: {
      type: String,
    },
    isactive: {
      type: Boolean,
      default: false,
    },
    otpexpiration: {
      type: String,
    },

    token: {
      type: String,
    },
    referralCode:{
      type: String,
    },
    // referredEmails:{
    //   type: Array,
    // },
    referralbyCode:{
      type: String,
    },
    referralby:{
      type: String,
    },

  },
  { versionKey: false }
);

const StudentReg = mongoose.model("StudentReg", clgSchema);
module.exports = StudentReg;
