import mongoose from "mongoose";
import ProductRepository from "../../application/repository/ProductRepository";
import productMongoModel from "../mongodb/models/ProductMongoModel.js";
import Product from "../../domain/Product.js";

export default class ProductRepositoryMongo implements ProductRepository {
    constructor() {
    }

    async list(): Promise<Product[]> {
        const productsMongo = await productMongoModel.find({});
        const products = productsMongo.map((p) => {
            return Product.populate(p.id, p.description, p.price);
        });
        return products;
    }

    async findById(id: string): Promise<Product> {
        const productMongo = await productMongoModel.findById(id).exec();
        const product = Product.populate(productMongo?.id, productMongo?.description ?? '', productMongo?.price ?? -1);
        return product;
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

    async update(product: Product): Promise<void> {
        const filter = {
            _id: product.getId()
        }
        const values = {
            description: product.getDescription(),
            price: product.getPrice()
        }
        await productMongoModel.findOneAndUpdate(filter, values);
    }

    async delete(id: string): Promise<void> {
        await productMongoModel.findByIdAndDelete(id);
    }
}