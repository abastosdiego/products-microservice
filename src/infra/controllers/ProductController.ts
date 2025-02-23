import { Request, Response } from 'express';
import productMongoModel from "../mongodb/models/ProductMongoModel.js";
import ProductRepository from '../../application/repository/ProductRepository.js';
import ProductRepositoryMongo from '../repository/ProductRepositoryMongo.js';
import AddProduct from '../../application/useCase/AddProduct.js';

export default class ProductController {
    static async getAllProducts (req: Request, res: Response) {
        try {
            const products = await productMongoModel.find({});
            res.status(200).json(products);
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async getProductById (req: Request, res: Response) {
        try {
            const id = req.params.id;
            const objProduct = await productMongoModel.findById(id);
            res.status(200).json(objProduct);
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async addProduct (req: Request, res: Response) {
        try {
            const productRepository = new ProductRepositoryMongo();
            const addProduct = new AddProduct(productRepository);
            const input = req.body;
            await addProduct.execute(input);
            res.status(201).json({message: "Produto criado com sucesso!"});
            //const newProduct = await productMongoModel.create(req.body);
            //res.status(201).json({message: "criado com sucesso!", productId: newProduct._id});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async updateProduct (req: Request, res: Response) {
        try {
            const id = req.params.id;
            await productMongoModel.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "atualizado!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async deleteProduct (req: Request, res: Response) {
        try {
            const id = req.params.id;
            await productMongoModel.findByIdAndDelete(id);
            res.status(200).json({message: "excluído!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }
}