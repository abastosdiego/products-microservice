import ProductRepository from "../../application/repository/ProductRepository";
import productMongoModel from "../mongodb/models/ProductMongoModel.js";
import Product from "../../domain/Product";

export default class ProductRepositoryMongo implements ProductRepository {
    list(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    
    async create(product: Product): Promise<void> {
        const values = {
            _id: product.getId(),
            description: product.getDescription(),
            price: product.getPrice()
        }
        console.log(values);
        await productMongoModel.create(values);
    }
}