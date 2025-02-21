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

test('alterar produto', async () => {

    const response = await axios.get('http://localhost:3000/products');
    const id = response.data?.[0]?.['_id'];
    const descricao = response.data?.[0]?.['descricao'];

    if (!(id && descricao)){
        throw new Error('Os dados recebidos são inválidos ou incompletos.');
    }
    const descricaoAlterada = `${descricao}_`;
    const input = {
        descricao: descricaoAlterada
    };
    const responseAlterar = await axios.put(`http://localhost:3000/products/${id}`, input);
    expect(responseAlterar.status).toBe(200);
   
});

test('excluir produto', async () => {

    const responseGet = await axios.get('http://localhost:3000/products');
    const id = responseGet.data?.[0]?.['_id'];
    const descricao = responseGet.data?.[0]?.['descricao'];

    if (!(id && descricao)){
        throw new Error('Os dados recebidos são inválidos ou incompletos.');
    }
    const qtdeProdutos = responseGet.data.length;

    const responseDelete = await axios.delete(`http://localhost:3000/products/${id}`);
    expect(responseDelete.status).toBe(200);
   
    const responseGetAfterDelete = await axios.get('http://localhost:3000/products');
    expect(responseGetAfterDelete.data.length).toBe(qtdeProdutos-1);
});