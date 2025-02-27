const clientes = [];

function CadastraCliente(id, nome, cpf)
{
    var cliente =
    {
        id: id,
        nome: nome,
        cpf: cpf
    }
    clientes.push(cliente);
    return cliente;
}

function AtualizaCliente(id, nome, cpf)
{
    var teveRetorno = true;
    for(let i = 0; i < clientes.length; i++)
    {
        if(clientes[i].id == id)
        {
            clientes[i].nome = nome;
            clientes[i].cpf = cpf;
            return clientes[i];
        }
        else{
            teveRetorno = false;
        }
    }
}

function ListaCliente()
{
    return clientes;
}

module.exports = 
{
    CadastraCliente,
    ListaCliente,
    AtualizaCliente
}