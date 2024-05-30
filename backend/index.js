import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./db/ConnectToMongodb.js";

dotenv.config();

const app = express();

app.use(express.json());

// app.use(
//     cors({
//       origin: "http://localhost:3000",
//       credentials: true,
//     })
//   );

app.get("/a", (req, res) => {
  res.send("products");
});

const PORT = process.env.PORT || 5000;

connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB db connection failed !!! ", err);
  });
