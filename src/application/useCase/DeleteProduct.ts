import ProductRepository from "../repository/ProductRepository.js";

export default class DeleteProduct {
    constructor(private productRepository: ProductRepository) {
    }

    public async execute(id: string): Promise<void> {
        await this.productRepository.delete(id);
    }
}