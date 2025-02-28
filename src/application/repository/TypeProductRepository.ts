import TypeProduct from "../../domain/TypeProduct";

export default interface TypeProductRepository {
    list(): Promise<TypeProduct[]>;
    findById(id: string): Promise<TypeProduct>;
    create (TypeProduct: TypeProduct): Promise<void>;
    update(TypeProduct: TypeProduct): Promise<void>;
    delete(id: string): Promise<void>;
}