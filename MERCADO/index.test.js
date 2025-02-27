const produto = require("./produtos");
const cliente = require("./cliente");
const pedido = require("./pedido");


test("Cadastra produto", () => {
    expect(produto.CadastraProduto("RTX 4090", 5000))
})

test("Mostra um produto", () => {
    expect(produto.ListaProduto)
})

test("Cadastra cliente", ()=>{
    expect(cliente.CadastraCliente(2, "Pedro Henrique", 78612334290)).toEqual({id: 2, nome: "Pedro Henrique", cpf: 78612334290});
})

test("Mostra Cliente", ()=>{
    expect(cliente.ListaCliente())
})

test("Atualiza Cliente", ()=>{
    expect(cliente.AtualizaCliente(2, "Lucas", 78612334290)).toEqual({
        id: 2,
        nome: "Lucas",
        cpf: 78612334290
    });
});


test("Cadastra Pedido: ", ()=>{
    expect(pedido.CadastraPedidos(1, 2, 1, 5000)).toEqual({
        id: 1,
        id_cliente: 2,
        id_produto: 1, 
        quantidade: 1,
        total: 5000
    })
})

test("Atualiza Pedido", ()=>{
    expect(pedido.AtualizaPedido(1, 2, 1, 5000)).toEqual({
        id_produto: 1,
        id_cliente: 2,
        quantidade: 1,
        total: 5000
    })
})

test("Mostra Pedido: ", ()=>{
    expect(pedido.ListaPedidos())
})



test("Deleta pedido: ", ()=>{
    expect(pedido.DeletaPedidos())
})