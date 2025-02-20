import express from "express";
import productsRoutes from "./productsRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Hello Node.js"));

    app.use(express.json(), productsRoutes);
};

export default routes;