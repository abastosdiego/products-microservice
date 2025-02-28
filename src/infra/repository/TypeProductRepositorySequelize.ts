import { injectable } from 'tsyringe';
import TypeProduct from '../../domain/TypeProduct.js';
import TypeProductRepository from '../../application/repository/TypeProductRepository.js';
import typeProductSequelizeModel from './sequelizeModels/typeProductSequelizeModel.js';

@injectable()
export default class TypeProductRepositorySequelize implements TypeProductRepository {
    list(): Promise<TypeProduct[]> {
        throw new Error('Method not implemented.');
    }
    async findById(id: string): Promise<TypeProduct> {
        const typeProductData = await typeProductSequelizeModel.findByPk(id);
        if (!typeProductData) {
            throw new Error("Tipo de produto não encontrado!");
        }
        const { description } = typeProductData.dataValues;
        return TypeProduct.populate(id, description);
    }
    async create(typeProduct: TypeProduct): Promise<void> {
        const values = {
            id: typeProduct.getId(),
            description: typeProduct.getDescription()
        }
        await typeProductSequelizeModel.create(values);
    }
    async update(typeProduct: TypeProduct): Promise<void> {
        const id = typeProduct.getId();
        const values = {
            id: typeProduct.getId(),
            description: typeProduct.getDescription()
        }
        await typeProductSequelizeModel.update(values, { where:{id} });
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}