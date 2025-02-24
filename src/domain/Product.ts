export default class Product {
    private description: string | undefined;
    private price: number | undefined;

    private constructor(private id: string, description: string, price: number) {
        this.setDescription(description);
        this.setPrice(price);
    }

    public static create(description: string, price: number) {
        const id = crypto.randomUUID().toString();
        return new Product(id, description, price);
    }

    public static populate(id: string, description: string, price: number) {
        return new Product(id, description, price);
    }

    public getId(): string {
        return this.id;
    }

    public getDescription(): string {
        return this.description ?? '';
    }

    public getPrice(): number {
        return this.price ?? 0;
    }

    public setDescription(description: string): void {
        if (description.length <= 2) {
            throw new Error("Invalid description!");
        }
        this.description = description;
    }

    public setPrice(price: number): void {
        if (price < 0) {
            throw new Error("Invalid price!");
        }
        this.price = price;
    }
}