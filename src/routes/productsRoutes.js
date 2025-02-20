import express from "express";
import ProductController from "../controllers/ProductController.js";

const routes = express.Router();

routes.get("/products", ProductController.getAllProducts);

export default routes;