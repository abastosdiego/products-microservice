import ProductRepository from "../repository/ProductRepository.js";

export default class DeleteProduct {
    constructor(private productRepository: ProductRepository) {
    }

    public async execute(id: string): Promise<any> {
        return this.productRepository.delete(id);
    }
}