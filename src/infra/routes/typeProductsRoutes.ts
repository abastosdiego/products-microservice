import express from "express";
import TypeProductController from "../controllers/TypeProductController.js";

const routes = express.Router();

// routes.get("/products", ProductController.getAllProducts);
// routes.get("/products/:id", ProductController.getProductById);
routes.put("/type-products/:id", TypeProductController.update);
routes.post("/type-products", TypeProductController.add);
// routes.delete("/products/:id", ProductController.deleteProduct);

export default routes;