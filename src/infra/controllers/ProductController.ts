import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AddProduct from '../../application/useCase/Product/AddProduct.js';
import DeleteProduct from '../../application/useCase/Product/DeleteProduct.js';
import GetProductById from '../../application/useCase/Product/GetProductById.js';
import UpdateProduct from '../../application/useCase/Product/UpdateProduct.js';
import GetAllProducts from '../../application/useCase/Product/GetAllProducts.js';

export default class ProductController {
    static async getAllProducts (req: Request, res: Response) {
        try {
            const getAllProducts = container.resolve(GetAllProducts);
            const products = await getAllProducts.execute();
            res.status(200).json(products);
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async getProductById (req: Request, res: Response) {
        try {
            const getProductById = container.resolve(GetProductById);
            const id = req.params.id;
            const product = await getProductById.execute(id);
            res.status(200).json(product);
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async addProduct (req: Request, res: Response) {
        try {
            const addProduct = container.resolve(AddProduct);
            const input = {
                description: req.body.description,
                price: req.body.price
            }
            const output = await addProduct.execute(input);
            res.status(201).json({message: "Produto criado com sucesso!", "id": output.id});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async updateProduct (req: Request, res: Response) {
        try {
            const updateProduct = container.resolve(UpdateProduct);
            const id = req.params.id;
            const input = {
                description: req.body.description,
                price: req.body.price
            }
            await updateProduct.execute(id, input);
            res.status(200).json({message: "Produto atualizado com sucesso!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async deleteProduct (req: Request, res: Response) {
        try {
            const deleteProduct = container.resolve(DeleteProduct);
            const id = req.params.id;
            deleteProduct.execute(id);
            res.status(200).json({message: "Produto excluído com sucesso!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }
}