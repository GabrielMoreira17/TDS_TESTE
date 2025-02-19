// Importando o módulo pessoa
const pessoa  = require("./pessoa");

// Cadastra pessoas
pessoa.cadastraPessoa("Gabriel", 17);
pessoa.cadastraPessoa("Lucas", 18);
pessoa.cadastraPessoa("Pedro", 19);
pessoa.cadastraPessoa("João", 20);

// Lista pessoas
console.log(pessoa.listaPessoas());

// Deleta a pessoa com id 1
pessoa.DeletaPessoa(1);


// Atualiza a pessoa com id passado
pessoa.AtualizaPessoas(2, "Gustavo", 30);


// Lista pessoas depois de deletar
console.log(pessoa.listaPessoas());
