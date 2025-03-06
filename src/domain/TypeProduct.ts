export default class TypeProduct {
    private description: string | undefined;

    private constructor(private id: string, description: string) {
        this.setDescription(description);
    }

    public static create(description: string) {
        const id = crypto.randomUUID().toString();
        return new TypeProduct(id, description);
    }

    public static populate(id: string, description: string) {
        return new TypeProduct(id, description);
    }

    public getId(): string {
        return this.id;
    }

    public getDescription(): string {
        return this.description ?? '';
    }

    public setDescription(description: string): void {
        if (description.length < 2) {
            throw new Error("Invalid description!");
        }
        this.description = description;
    }
}