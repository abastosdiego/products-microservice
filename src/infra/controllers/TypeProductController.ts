import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AddTypeProduct from '../../application/useCase/TypeProduct/AddTypeProduct.js';
import UpdateTypeProduct from '../../application/useCase/TypeProduct/UpdateTypeProduct.js';

export default class TypeProductController {
    // static async getAllProducts (req: Request, res: Response) {
    //     try {
    //         const getAllProducts = container.resolve(GetAllProducts);
    //         const products = await getAllProducts.execute();
    //         console.log(products);
    //         res.status(200).json(products);
    //     } catch (error: any) {
    //         res.status(500).json({message: error?.message});
    //     }
    // }

    // static async getProductById (req: Request, res: Response) {
    //     try {
    //         const getProductById = container.resolve(GetProductById);
    //         const id = req.params.id;
    //         const product = await getProductById.execute(id);
    //         res.status(200).json(product);
    //     } catch (error: any) {
    //         res.status(500).json({message: error?.message});
    //     }
    // }

    static async add (req: Request, res: Response) {
        try {
            const addTypeProduct = container.resolve(AddTypeProduct);
            const input = {
                description: req.body.description
            }
            const output = await addTypeProduct.execute(input);
            res.status(201).json({message: "Tipo de produto criado com sucesso!", "id": output.id});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    static async update (req: Request, res: Response) {
        try {
            const updateTypeProduct = container.resolve(UpdateTypeProduct);
            const id = req.params.id;
            const input = {
                description: req.body.description
            }
            await updateTypeProduct.execute(id, input);
            res.status(200).json({message: "Tipo de Produto atualizado com sucesso!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

    // static async deleteProduct (req: Request, res: Response) {
    //     try {
    //         const deleteProduct = container.resolve(DeleteProduct);
    //         const id = req.params.id;
    //         deleteProduct.execute(id);
    //         res.status(200).json({message: "Produto excluído com sucesso!"});
    //     } catch (error: any) {
    //         res.status(500).json({message: error?.message});
    //     }
    // }
}