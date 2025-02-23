import Product from "../../domain/Product";

export default interface ProductRepository {
    create (product: Product): Promise<void>;
    list(): Promise<Product[]>;
}