import { injectable, inject } from 'tsyringe';
import TypeProductRepository from '../../repository/TypeProductRepository.js';

@injectable()
export default class UpdateTypeProduct {
    constructor(
        @inject('TypeProductRepository') private typeProductRepository: TypeProductRepository
    ) {}

    public async execute(id: string, input: Input): Promise<void> {
        const typeProduct = await this.typeProductRepository.findById(id);
        typeProduct.setDescription(input.description);
        await this.typeProductRepository.update(typeProduct);
    }
}

type Input = {
    description: string
}