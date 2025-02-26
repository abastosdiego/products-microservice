import { injectable, inject } from 'tsyringe';
import ProductRepository from "../repository/ProductRepository.js";

@injectable()
export default class UpdateProduct {
    constructor(
        @inject('ProductRepository') private productRepository: ProductRepository
    ) {}

    public async execute(id: string, input: Input): Promise<void> {
        const product = await this.productRepository.findById(id);
        product.setDescription(input.description);
        product.setPrice(input.price);
        await this.productRepository.update(product);
    }
}

type Input = {
    description: string,
    price: number
}