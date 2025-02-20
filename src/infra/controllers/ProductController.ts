import { Request, Response } from 'express';
import product from "../models/Product.js";

export default class ProductController {
    static async getAllProducts (req: Request, res: Response) {
        try {
            const livros = await product.find({});
            res.status(200).json(livros);
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async getProductById (req: Request, res: Response) {
        try {
            const id = req.params.id;
            const livro = await product.findById(id);
            res.status(200).json(livro);
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async addProduct (req: Request, res: Response) {
        try {
            const newProduct = await product.create(req.body);
            res.status(201).json({message: "criado com sucesso!", productId: newProduct._id});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async updateProduct (req: Request, res: Response) {
        try {
            const id = req.params.id;
            await product.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "atualizado!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async deleteProduct (req: Request, res: Response) {
        try {
            const id = req.params.id;
            await product.findByIdAndDelete(id);
            res.status(200).json({message: "excluído!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }
}