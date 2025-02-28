const pedidos = [];
var idSeq = 1;

function CadastraPedidos(id_produto, id_cliente, quantidade, total)
{
    var pedido = 
    {
        id: idSeq++,
        id_produto: id_produto,
        id_cliente: id_cliente,
        quantidade: quantidade,
        total: total
    }
    pedidos.push(pedido);
    return pedido;
}

function ListaPedidos()
{
    return pedidos;
}

function AtualizaPedido(id, id_produtos, id_cliente, quantidade, total)
{
    var teveRetorno = true;
    for (let i = 0; i < pedidos.length; i++)
    {
        if(pedidos[i].id == id)
        {
            pedidos[i].id_produto = id_produtos,
            pedidos[i].id_cliente = id_cliente,
            pedidos[i].quantidade = quantidade,
            pedidos[i].total = total
            return pedidos[i];
        }
        else{
            teveRetorno = false
        }
    };
}

function DeletaPedidos(id)
{
    for(let i = 0; i < pedidos.length; i++)
    {
        if(pedidos[i].id == id)
        {
            pedidos.splice(i,1);
            console.log("Pedido deletado com sucesso!");
            return true;
        }
    }
    return false;
}

module.exports =
{
    CadastraPedidos,
    ListaPedidos,
    DeletaPedidos,
    AtualizaPedido
}