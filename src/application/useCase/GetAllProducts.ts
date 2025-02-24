import Product from "../../domain/Product.js";
import ProductRepository from "../repository/ProductRepository.js";

export default class GetAllProducts {
    constructor(private productRepository: ProductRepository) {
    }

    public async execute(): Promise<Product[]> {
        return this.productRepository.list();
    }
}