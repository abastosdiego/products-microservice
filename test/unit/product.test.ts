import Product from "../../src/domain/Product.js";

describe("Product", () => {
  it("deve criar um produto com descrição e preço corretos", () => {
    const product = Product.create("Smartphone", 2000);
    expect(product.getDescription()).toBe("Smartphone");
    expect(product.getPrice()).toBe(2000);
  });

  it("deve lançar um erro pela descrição menor que 2 caracteres", () => {
    expect(() => Product.create("A", 10)).toThrow("Invalid description!");
  });

  it("deve lançar um erro pelo preço negativo", () => {
    expect(() => Product.create("TV", -10)).toThrow("Invalid price!");
  });
});