import Product from "../../domain/Product";

export default interface ProductRepository {
    list(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    create (product: Product): Promise<void>;
    update(product: Product): Promise<void>;
    delete(id: string): Promise<void>;
}