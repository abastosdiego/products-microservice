import { inject, injectable } from 'tsyringe';
import TypeProduct from '../../../domain/TypeProduct.js';
import TypeProductRepository from '../../repository/TypeProductRepository.js';

@injectable()
export default class GetTypeProductById {
    constructor(
        @inject('TypeProductRepository') private typeProductRepository: TypeProductRepository
    ) {}

    public async execute(id: string): Promise<TypeProduct> {
        return this.typeProductRepository.findById(id);
    }
}