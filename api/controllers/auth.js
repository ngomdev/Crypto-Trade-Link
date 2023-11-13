import User from "../models/User.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword, role });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (err) {
    res.status(500).json(err.message);
    next(err);
  }
};
