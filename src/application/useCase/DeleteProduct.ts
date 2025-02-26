import { injectable, inject } from 'tsyringe';
import ProductRepository from "../repository/ProductRepository.js";

@injectable()
export default class DeleteProduct {
    constructor(
        @inject('ProductRepository') private productRepository: ProductRepository
    ) {}

    public async execute(id: string): Promise<void> {
        await this.productRepository.delete(id);
    }
}