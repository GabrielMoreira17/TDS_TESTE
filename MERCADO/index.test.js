const produto = require("./produtos");
const cliente = require("./cliente");
const pedido = require("./pedido");
const { default: expect } = require("expect");


//TESTES DE PRODUTOS
test("Cadastra produto", () => {
    expect(produto.CadastraProduto("RTX 4090", 5000));
});

test("Mostra um produto", () => {
    expect(produto.ListaProduto());
});

test("Deleta produtos", ()=>{
    expect(produto.DeletaProdutos());
})

test("Atualiza produtos", ()=>{
    expect(produto.AtualizaProduto(1, "RTX 4090", 5000)).toEqual({
        id: 1,
        nome: "RTX 4090",
        preco: 5000
    });
});

//TESTES DO CLIENTE
test("Cadastra cliente", ()=>{
    expect(cliente.CadastraCliente(2, "Pedro Henrique", 78612334290)).toEqual({id: 2, nome: "Pedro Henrique", cpf: 78612334290});
})

test("Mostra Cliente", ()=>{
    expect(cliente.ListaCliente());
});

test("Atualiza Cliente", ()=>{
    expect(cliente.AtualizaCliente(2, "Lucas", 78612334290)).toEqual({
        id: 2,
        nome: "Lucas",
        cpf: 78612334290
    });
});


test("Deleta cliente!", ()=>{
    expect(cliente.DeletaCliente());
})

//TESTES DE PEDIDOS
test("Cadastra Pedido: ", ()=>{
    expect(pedido.CadastraPedidos(1, 2, 1, 5000)).toEqual({
        id: 1,
        id_cliente: 2,
        id_produto: 1, 
        quantidade: 1,
        total: 5000
    });
});

test("Atualiza Pedido", ()=>{
    const data = pedido.AtualizaPedido(1, 1, 2, 1, 5000);
    expect(data).toEqual({
        id: 1,
        id_produto: 1,
        id_cliente: 2,
        quantidade: 1,
        total: 5000
    });
});


test("Mostra Pedido: ", ()=>{
    expect(pedido.ListaPedidos());
});



test("Deleta pedido: ", ()=>{
    expect(pedido.DeletaPedidos());
});