import { inject, injectable } from 'tsyringe';
import TypeProductRepository from '../../repository/TypeProductRepository.js';

@injectable()
export default class DeleteTypeProduct {
    constructor(
        @inject('TypeProductRepository') private typeProductRepository: TypeProductRepository
    ) {}

    public async execute(id: string): Promise<void> {
        await this.typeProductRepository.delete(id);
    }
}