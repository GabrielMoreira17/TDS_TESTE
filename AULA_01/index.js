const pessoa  = require("./pessoa");
const DeletaPessoa = require("./pessoa");

pessoa.cadastraPessoa("Gabriel", 17);
pessoa.cadastraPessoa("Lucas", 18);
pessoa.cadastraPessoa("Pedro", 19);

console.log(pessoa.listaPessoas());

pessoa.DeletaPessoa(1);
console.log(pessoa.listaPessoas());