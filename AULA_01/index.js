// Importando o módulo pessoa
const pessoa  = require("./pessoa");

// Cadastra pessoas
pessoa.cadastraPessoa("Gabriel", 17);
pessoa.cadastraPessoa("Lucas", 18);
pessoa.cadastraPessoa("Pedro", 19);
pessoa.cadastraPessoa("João", 20);
pessoa.cadastraPessoa("Julia", 17);
pessoa.cadastraPessoa("Larissa", 17);

// Lista pessoas
console.log(pessoa.listaPessoas());

// Deleta a pessoa com id 1
pessoa.DeletaPessoa(1);

// Lista pessoas depois de deletar
console.log(pessoa.listaPessoas());

pessoa.ConsultarPessoasPeloId(4);
console.log("A pessoa consultada foi");
console.log(pessoa.ConsultarPessoasPeloId(4));

// Atualiza a pessoa com id passado
pessoa.AtualizaPessoas(2, "Leandro", 90);
console.log("Pessoa atualizada com sucesso!");
console.log(pessoa.listaPessoas());