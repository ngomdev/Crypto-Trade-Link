import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import path from "path";

import user from "./routes /user.route.js";
import auth from "./routes /auth.route.js";

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to MongoDB is Successfully✅ !"))
  .catch(() => console.log("Connection to MongoDB failed!"));

const app = express();
app.use(express.json());

app.listen("3000", () => {
  console.log("Server running on port 3000");
});

app.use("/api/user", user);
app.use("/api/auth", auth);

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "Crypto-Trade-Link/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "Crypto-Trade-Link", "dist", "index.html"));
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
