import Product from "../../domain/Product.js";
import ProductRepository from "../repository/ProductRepository.js";

export default class GetProductById {
    constructor(private productRepository: ProductRepository) {
    }

    public async execute(id: string): Promise<Product> {
        return this.productRepository.findById(id);
    }
}