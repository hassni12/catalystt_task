import Product from "../model/productModel.js";
import asyncHandler from "express-async-handler";

// route GET api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (products?.length === 0) {
    return res
      .status(401)
      .send({ message: "product not found", success: false, data: [] });
  } else {
    return res.status(200).send({ data: products, success: true, message: "" });
  }
});

export { getProducts };
