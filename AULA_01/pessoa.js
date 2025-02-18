/*
    CRUD
    CREATE - CRIAR
    READER - LER
    UPDATE - ATUALIZAR
    DELETE - DELETAR
*/  

// ID, NOME, IDADE
const pessoas = [];
var idSeq = 0;

function cadastraPessoa(nome, idade)
{
    var pessoa = 
    {
        id: idSeq++,
        nome: nome,
        idade: idade
    }

    pessoas.push(pessoa);
    return pessoa;
}

//função que apresenta a lista de pessoas
function listaPessoas()
{
    return pessoas;
}

function DeletaPessoa(id)
{
    var index = pessoas.findIndex(pessoa => pessoa.id == id);
    if(index != -1)
    {
        pessoas.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {cadastraPessoa, listaPessoas, DeletaPessoa};

// console.log(cadastraPessoa("Gabriel", 17));
// console.log(cadastraPessoa("Lucas", 18));
// console.log(cadastraPessoa("Pedro", 19));

// console.log(listaPessoas());