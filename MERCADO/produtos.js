const produtos = [];
var idSeq = 1;

function CadastraProduto(nome, preco)
{
    var produto =
    {
        id: idSeq++,
        nome: nome, 
        preco: preco
    }
    produtos.push(produto);
    return produto;
}

function ListaProduto()
{
    return produtos;
}

function AtualizaProduto(id, nome, preco)
{
    var teveRetorno = true;
    
    for(let i = 0; i < produtos.length; i++)
    {
        if(produtos[i].id == id)
        {
            produtos[i].nome == nome;
            produtos[i].preco == preco;
            return produtos[i];
        }
        else
        {
            teveRetorno = false;
        }
    }
}

function DeletaProdutos(id)
{
    for(let i = 0; i < produtos.length; i++)
    {
        if(produtos[i].id == id)
        {
            produtos.splice(i, 1);
            console.log("Produto deletado com sucesso!");
            return true;
        }
    }
    return false;
}

module.exports = 
{
    CadastraProduto,
    ListaProduto,
    DeletaProdutos,
    AtualizaProduto
}