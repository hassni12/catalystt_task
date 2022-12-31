import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { dbConnection } from "./config/dbConnection.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
dotenv.config();
dbConnection();

const port = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`successfully connected to port ${port}`);
});
