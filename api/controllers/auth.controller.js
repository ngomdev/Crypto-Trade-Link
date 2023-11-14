import User from "../models/User.js";
import OTP from "../models/OTP.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    // get input data
    const { name, email, password, role, otp } = req.body;

    // Check if all details are there or not
    if (!name || !email || !password || !otp) {
      return next(errorHandler(403, "All Fields are required"));
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, "User already exists"));
    }

    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response);
    if (response.length === 0) {
      // OTP not found for the email
      return next(errorHandler(400, "The OTP is not valid"));
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return next(errorHandler(400, "The OTP is not valid"));
    }

    // Secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return next(
        errorHandler(500, "Hashing password error: " + error.message)
      );
    }

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      user: newUser,
      message: "User created successfully ✅",
    });
  } catch (error) {
    console.error(error);
    return next(errorHandler(500, "User registration failed"));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcrypt.compare(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong password!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// Send OTP For Email Verification
export const sendotp = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user is already present
    // Find user with provided email
    const checkUserPresent = await User.findOne({ email });
    // If user found with provided email
    if (checkUserPresent)
      // Return 401 Unauthorized status code with error message
      return next(errorHandler(401, `User is Already Registered`));

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    console.log(error.message);
    // return next(errorHandler(500, error.message));
    return res.status(500).json({ success: false, error: error.message });
  }
};
