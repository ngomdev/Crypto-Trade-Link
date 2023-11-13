import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import user from "./routes /user.js";

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.listen("3000", () => {
  console.log("Server running on port 3000");
});

app.use("/api/user", user);
