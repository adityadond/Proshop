import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 5000;
connectDB();
const app = express();
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  `server is running on ${PORT}`;
});
