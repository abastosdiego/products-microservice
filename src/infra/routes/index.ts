import express, { Express, Request, Response } from "express";
import productsRoutes from "./productsRoutes.js";

const routes = (app: Express) => {
    app.route("/").get((req: Request, res: Response): void => {
        res.status(200).send("Hello Node.js");
    });

    app.use(express.json(), productsRoutes);
};

export default routes;