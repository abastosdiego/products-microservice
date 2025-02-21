import product from "../../infra/models/Product.js";

export default class AddProduct {
    constructor() {
    }

    async execute(input: []): Promise<any> {
        return product.create(input);
    }
}