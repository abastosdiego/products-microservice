import { inject, injectable } from 'tsyringe';
import TypeProduct from '../../../domain/TypeProduct.js';
import TypeProductRepository from '../../repository/TypeProductRepository.js';

@injectable()
export default class GetAllTypeProducts {
    constructor(
        @inject('TypeProductRepository') private typeProductRepository: TypeProductRepository
    ) {}

    public async execute(): Promise<TypeProduct[]> {
        return this.typeProductRepository.list();
    }
}