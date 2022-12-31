import express from "express";

import { getProducts } from "../controller/productController.js";

const routes = express.Router();
routes.route("/").get(getProducts);

export default routes;
