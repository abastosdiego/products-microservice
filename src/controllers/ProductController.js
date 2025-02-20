import product from "../models/Product.js";

export default class ProductController {
    static async getAllProducts (req, res) {
        try {
            const livros = await product.find({});
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getProductById (req, res) {
        try {
            const id = req.params.id;
            const livro = await product.findById(id);
            res.status(200).json(livro);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async addProduct (req, res) {
        try {
            console.log(req);
            console.log(req.body);
            const newProduct = await product.create(req.body);
            res.status(201).json({message: "criado com sucesso!", productId: newProduct.id});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async updateProduct (req, res) {
        try {
            const id = req.params.id;
            console.log(req.body);
            await product.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "atualizado!"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async deleteProduct (req, res) {
        try {
            const id = req.params.id;
            await product.findByIdAndDelete(id);
            res.status(200).json({message: "excluído!"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}