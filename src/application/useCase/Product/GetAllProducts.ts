import { injectable, inject } from 'tsyringe';
import Product from "../../../domain/Product.js";
import ProductRepository from "../../repository/ProductRepository.js";

@injectable()
export default class GetAllProducts {
    constructor(
        @inject('ProductRepository') private productRepository: ProductRepository
    ) {}

    public async execute(): Promise<Product[]> {
        return this.productRepository.list();
    }
}