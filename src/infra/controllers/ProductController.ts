import { Request, Response } from 'express';
import ProductRepositoryMongo from '../repository/ProductRepositoryMongo.js';
import AddProduct from '../../application/useCase/AddProduct.js';
import UpdateProduct from '../../application/useCase/UpdateProduct.js';
import DeleteProduct from '../../application/useCase/DeleteProduct.js';
import GetProductById from '../../application/useCase/GetProductById.js';

export default class ProductController {
    static async getAllProducts (req: Request, res: Response) {
        try {
            const productRepository = new ProductRepositoryMongo();
            const products = await productRepository.list();
            console.log(products);
            res.status(200).json(products);
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async getProductById (req: Request, res: Response) {
        try {
            const productRepository = new ProductRepositoryMongo();
            const id = req.params.id;
            const getProductById = new GetProductById(productRepository);
            const product = await getProductById.execute(id);
            res.status(200).json(product);
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
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async updateProduct (req: Request, res: Response) {
        try {
            const productRepository = new ProductRepositoryMongo();
            const updateProduct = new UpdateProduct(productRepository);
            const id = req.params.id;
            const input = req.body;
            await updateProduct.execute(id, input);
            res.status(200).json({message: "atualizado!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async deleteProduct (req: Request, res: Response) {
        try {
            const productRepository = new ProductRepositoryMongo();
            const deleteProduct = new DeleteProduct(productRepository);
            const id = req.params.id;
            deleteProduct.execute(id);
            res.status(200).json({message: "excluído!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }
}