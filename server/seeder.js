import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "./model/productModel.js";
import { product } from "./data/products.js";  
import { dbConnection } from "./config/dbConnection.js";
dotenv.config();
dbConnection()

const importData = async () => {

  try {
    // await Product.deleteMany();
    await Product.insertMany(product);
    console.log("Data Imported ");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};
const destoryData = async () => {
  try {
  
    await Product.deleteMany();

    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destoryData();
} else {
  importData();
}
