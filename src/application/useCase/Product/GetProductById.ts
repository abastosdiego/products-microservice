import { injectable, inject } from 'tsyringe';
import Product from "../../../domain/Product.js";
import ProductRepository from "../../repository/ProductRepository.js";

@injectable()
export default class GetProductById {
    constructor(
        @inject('ProductRepository') private productRepository: ProductRepository
    ) {}

    public async execute(id: string): Promise<Product> {
        return this.productRepository.findById(id);
    }
}