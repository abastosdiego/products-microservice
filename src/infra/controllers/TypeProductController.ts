import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AddTypeProduct from '../../application/useCase/TypeProduct/AddTypeProduct.js';
import DeleteTypeProduct from '../../application/useCase/TypeProduct/DeleteTypeProduct.js';
import GetTypeProductById from '../../application/useCase/TypeProduct/GetTypeProductById.js';
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

    static async getById (req: Request, res: Response) {
        try {
            console.log("######## entrei aqui #############3");
            const getTypeProductById = container.resolve(GetTypeProductById);
            const id = req.params.id;
            const product = await getTypeProductById.execute(id);
            res.status(200).json(product);
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }

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

    static async delete (req: Request, res: Response) {
        try {
            const deleteTypeProduct = container.resolve(DeleteTypeProduct);
            const id = req.params.id;
            deleteTypeProduct.execute(id);
            res.status(200).json({message: "Tipo de Produto excluído com sucesso!"});
        } catch (error: any) {
            res.status(500).json({message: error?.message});
        }
    }
}