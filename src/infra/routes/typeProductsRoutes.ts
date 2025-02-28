import express from "express";
import TypeProductController from "../controllers/TypeProductController.js";

const routes = express.Router();

// routes.get("/products", ProductController.getAllProducts);
routes.get("/type-products/:id", TypeProductController.getById);
routes.put("/type-products/:id", TypeProductController.update);
routes.post("/type-products", TypeProductController.add);
routes.delete("/type-products/:id", TypeProductController.delete);

export default routes;