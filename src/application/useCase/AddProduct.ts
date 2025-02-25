import Product from "../../domain/Product.js";
import ProductRepository from "../repository/ProductRepository.js";

export default class AddProduct {
    constructor(private productRepository: ProductRepository) {
    }

    public async execute(input: Input): Promise<OutPut> {
        const product = Product.create(input.description, input.price);
        await this.productRepository.create(product);
        return {
            id: product.getId()
        }
    }
}

type Input = {
    description: string,
    price: number
}

type OutPut = {
    id: string
}