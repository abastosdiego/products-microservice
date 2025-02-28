import { injectable } from 'tsyringe';
import TypeProductRepository from '../../application/repository/TypeProductRepository.js';
import TypeProduct from '../../domain/TypeProduct.js';
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
        const created = await typeProductSequelizeModel.create(values);
        if (!created) {
            throw new Error("Erro ao criar o tipo de produto!");
        }
    }
    async update(typeProduct: TypeProduct): Promise<void> {
        const id = typeProduct.getId();
        const values = {
            id: typeProduct.getId(),
            description: typeProduct.getDescription()
        }
        const [updatedRows] = await typeProductSequelizeModel.update(values, { where: { id } });
        if (updatedRows === 0) {
            throw new Error("Tipo de produto não encontrado!");
        }
    }
    async delete(id: string): Promise<void> {
        const deletedRows = await typeProductSequelizeModel.destroy({ where: { id } });
        if (deletedRows === 0) {
            throw new Error("Tipo de produto não encontrado!");
        }
    }
}