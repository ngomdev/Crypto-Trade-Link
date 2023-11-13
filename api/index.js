import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import user from "./routes /user.js";
import auth from "./routes /auth.js";
// import auth from ".routes /auth.js";

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));


app.listen("3000", () => {
  console.log("Server running on port 3000");
});


app.use("/api/user", user);
app.use("/api/auth", auth);
