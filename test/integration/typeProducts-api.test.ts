import axios from "axios";

test('add type product', async () => {
    
});

describe("Type Products API test", () => {
    it("add type product", async () => {
    const input = {
        description: "Material escritório"
    };
    const responseCadastrar = await axios.post('http://localhost:3000/type-products', input);
    expect(responseCadastrar.status).toBe(201);
    expect(responseCadastrar.data.id).toBeDefined();
    const responseGet = await axios.get(`http://localhost:3000/type-products/${responseCadastrar.data.id}`);
    expect(responseGet.status).toBe(200);
    expect(responseGet.data.description).toBe('Material escritório');
    });

    //it("list type product", async () => {
    //    const response = await axios.get('http://localhost:3000/type-products');
    //    expect(response.status).toBe(200);
    //    expect(response.data).toBeDefined();
    //});

    // it("update type product", async () => {
        // const response = await axios.get('http://localhost:3000/type-products');
        // const id = response.data?.[0]?.['id'];
        // const description = response.data?.[0]?.['description'];
        // if (!(id && description)){
        //     throw new Error('Os dados recebidos são inválidos ou incompletos.');
        // }
        // const newDescription = `${description}_`;
        // const input = {
        //     description: newDescription
        // };
        // const responseUpdate = await axios.put(`http://localhost:3000/type-products/${id}`, input);
        // expect(responseUpdate.status).toBe(200);
        // const responseGet = await axios.get(`http://localhost:3000/type-products/${id}`);
        // expect(responseGet.data.description).toBe(newDescription);
    // });
});

// test('list products', async () => {
//         const response = await axios.get('http://localhost:3000/products');
//         expect(response.status).toBe(200);
//         expect(response.data).toBeDefined();
// });

// test('update product', async () => {
//     const response = await axios.get('http://localhost:3000/products');
//     const id = response.data?.[0]?.['id'];
//     const description = response.data?.[0]?.['description'];
//     const price = response.data?.[0]?.['price'];
//     if (!(id && description && price)){
//         throw new Error('Os dados recebidos são inválidos ou incompletos.');
//     }
//     const newDescription = `${description}_`;
//     const newPrice = price + 1;
//     const input = {
//         description: newDescription,
//         price: newPrice
//     };
//     const responseUpdate = await axios.put(`http://localhost:3000/products/${id}`, input);
//     expect(responseUpdate.status).toBe(200);
//     const responseGet = await axios.get(`http://localhost:3000/products/${id}`);
//     expect(responseGet.data.description).toBe(newDescription);
//     expect(responseGet.data.price).toBe(newPrice);
// });

// test('delete product', async () => {
//     const responseGet = await axios.get('http://localhost:3000/products');
//     const id = responseGet.data?.[0]?.['id'];
//     if (!(id)){
//         throw new Error('Os dados recebidos são inválidos ou incompletos.');
//     }
//     const productsQuantity = responseGet.data.length;
//     const responseDelete = await axios.delete(`http://localhost:3000/products/${id}`);
//     expect(responseDelete.status).toBe(200);
//     const responseGetAfterDelete = await axios.get('http://localhost:3000/products');
//     expect(responseGetAfterDelete.data.length).toBe(productsQuantity-1);
// });