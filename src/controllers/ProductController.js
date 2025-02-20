import product from "../models/Product.js";

export default class ProductController {
    static async getAllProducts (req, res) {
        const livros = await product.find({});
        res.status(200).send(livros);
    }

    static async addProduct (req, res) {
        try {
            const newProduct = await product.create(req.body);
            res.status(201).json({message: "criado com sucesso!", productId: newProduct.id});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}