import ProductRepository from "../repository/ProductRepository.js";

export default class UpdateProduct {
    constructor(private productRepository: ProductRepository) {
    }

    public async execute(id: string, input: any): Promise<any> {
        const product = await this.productRepository.findById(id);
        product.setDescription(input.description);
        product.setPrice(input.price);
        return this.productRepository.update(product);
    }
}