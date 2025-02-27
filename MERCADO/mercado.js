const cliente = require("./cliente");
const produto = require("./produtos");
const pedidos = require("./pedido");

produto.CadastraProduto("RTX 4090", 4000);
produto.CadastraProduto("Monitor", 800);
produto.CadastraProduto("Teclado", 400);
produto.CadastraProduto("Mouse", 200);
produto.CadastraProduto("Cadeira", 500);

console.log(produto.ListaProduto());

produto.DeletaProdutos(1);

console.log(produto.ListaProduto());

produto.AtualizaProduto(3, "Mesa", 100);
console.log("Produto atualizado com sucesso");

console.log(produto.ListaProduto());


cliente.CadastraCliente(1, "Gabriel", 18019817612);
cliente.CadastraCliente(2, "Pedro Henrique", 78612334290);
cliente.CadastraCliente(3, "Julia Alexandra", 89012312399);
cliente.CadastraCliente(4, "Larissa", 67865412333);

console.log(cliente.ListaCliente());



pedidos.CadastraPedidos(1, "Mesa", 3, 1)