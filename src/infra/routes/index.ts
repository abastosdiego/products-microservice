import express, { Express, Request, Response } from "express";
import productsRoutes from "./productsRoutes.js";
import typeProductsRoutes from "./typeProductsRoutes.js";

const routes = (app: Express) => {
    app.route("/").get((req: Request, res: Response): void => {
        res.status(200).send("Hello Node.js");
    });

    app.use(express.json());
    app.use(productsRoutes);
    app.use(typeProductsRoutes);
};

export default routes;
