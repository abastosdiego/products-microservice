import TypeProduct from "../../src/domain/TypeProduct.js";

describe("Type Product", () => {
  it("deve criar um tipo de produto", () => {
    const typeProduct = TypeProduct.create("Material Escolar");
    expect(typeProduct.getId()).toBeDefined();
    expect(typeProduct.getDescription()).toBe("Material Escolar");
  });

  it("deve lançar um erro pela descrição menor que 2 caracteres", () => {
    expect(() => TypeProduct.create("A")).toThrow("Invalid description!");
  });
});