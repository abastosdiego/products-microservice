import axios from "axios";

test('listar produtos', async () => {
        const response = await axios.get('http://localhost:3000/products');
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
});

test('cadastrar produto', async () => {
    const input = {
        descricao: "Produto"
    };
    const responseCadastrar = await axios.post('http://localhost:3000/products', input);
    expect(responseCadastrar.status).toBe(201);
    expect(responseCadastrar.data.productId).toBeDefined();
    const responseGet = await axios.get(`http://localhost:3000/products/${responseCadastrar.data.productId}`);
    expect(responseGet.status).toBe(200);
    expect(responseGet.data.descricao).toBe('Produto');
});