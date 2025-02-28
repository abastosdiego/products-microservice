import { injectable, inject } from 'tsyringe';
import TypeProductRepository from "../../repository/TypeProductRepository.js";
import TypeProduct from '../../../domain/TypeProduct.js';

@injectable()
export default class AddTypeProduct {
    constructor(
        @inject('TypeProductRepository') private typeProductRepository: TypeProductRepository
    ) {}

    public async execute(input: Input): Promise<OutPut> {
        const typeProduct = TypeProduct.create(input.description);
        await this.typeProductRepository.create(typeProduct);
        return {
            id: typeProduct.getId()
        }
    }
}

type Input = {
    description: string
}

type OutPut = {
    id: string
}