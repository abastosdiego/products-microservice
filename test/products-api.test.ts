import axios from "axios";

test('cadastrar produto', async () => {
    const input = {
        description: "Produto",
        price: 10
    };
    const responseCadastrar = await axios.post('http://localhost:3000/products', input);
    expect(responseCadastrar.status).toBe(201);
    //expect(responseCadastrar.data.productId).toBeDefined();
    //const responseGet = await axios.get(`http://localhost:3000/products/${responseCadastrar.data.productId}`);
    //expect(responseGet.status).toBe(200);
    //expect(responseGet.data.descricao).toBe('Produto');
});

test('listar produtos', async () => {
        const response = await axios.get('http://localhost:3000/products');
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
});

test('alterar produto', async () => {

    const response = await axios.get('http://localhost:3000/products');
    const id = response.data?.[0]?.['_id'];
    const description = response.data?.[0]?.['description'];

    if (!(id && description)){
        throw new Error('Os dados recebidos são inválidos ou incompletos.');
    }
    const descriptionAlterada = `${description}_`;
    const input = {
        description: descriptionAlterada
    };
    const responseAlterar = await axios.put(`http://localhost:3000/products/${id}`, input);
    expect(responseAlterar.status).toBe(200);
   
});

test('excluir produto', async () => {

    const responseGet = await axios.get('http://localhost:3000/products');
    const id = responseGet.data?.[0]?.['_id'];

    if (!(id)){
        throw new Error('Os dados recebidos são inválidos ou incompletos.');
    }
    const qtdeProdutos = responseGet.data.length;

    const responseDelete = await axios.delete(`http://localhost:3000/products/${id}`);
    expect(responseDelete.status).toBe(200);
   
    const responseGetAfterDelete = await axios.get('http://localhost:3000/products');
    expect(responseGetAfterDelete.data.length).toBe(qtdeProdutos-1);
});