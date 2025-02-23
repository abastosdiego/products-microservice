export default class Product {
    private constructor(private id: string, private description: string, private price: number) {}

    public static create(description: string, price: number) {
        const id = crypto.randomUUID().toString();
        console.log(id);
        return new Product(id, description, price);
    }

    public getId(): string {
        return this.id;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }
}