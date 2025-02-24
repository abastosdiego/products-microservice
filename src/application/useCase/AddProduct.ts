import Product from "../../domain/Product.js";
import ProductRepository from "../repository/ProductRepository.js";

export default class AddProduct {
    constructor(private productRepository: ProductRepository) {
    }

    public async execute(input: any): Promise<any> {
        const product = Product.create(input?.description, input?.price);
        return this.productRepository.create(product);
    }
}