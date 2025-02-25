import ProductRepository from "../repository/ProductRepository.js";

export default class UpdateProduct {
    constructor(private productRepository: ProductRepository) {
    }

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