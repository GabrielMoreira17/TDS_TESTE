// Função que realiza a soma de dois valores
function SomaDoisValores(a, b)
{
    return a + b;
} 
console.log("A soma é: ", SomaDoisValores(1, 5)); // Exibe o resultado da soma entre 1 e 5 || Os valores de soma são passados dentro dos parentes


//Função que multiplica dois valores que são passados para a e b
function MultipicaDoisValores(a, b)
{
    return a * b;
}
console.log("A multiplicação é: ", MultipicaDoisValores(1, 5)); // Mostra o resultado da multiplicacao


//Função que Divide dois valores que são passados dentro dos parenteses no console.log
function DivisaoDeDoisValores(a, b)
{
    return a / b;
}
console.log("A divisão é: ", DivisaoDeDoisValores(10, 5)); // Mostra o resultado da divisao

// Função que subtrai dois valores que são passados no console log e é armazenado nas variaveis a e b
function SubtracaoDeDoisValores(a, b)
{
    return a - b;
}
console.log("A subtração é: ", SubtracaoDeDoisValores(8, 4)); // Mostra o resultado da subtracao


function pessoa()
{
    return {
        id: 1,
        nome: "Gabriel",
        idade: 17
    }
}

//Exporta os arquivos para que possa ser usado em outros arquivos
module.exports =
{
    SomaDoisValores,
    MultipicaDoisValores,
    DivisaoDeDoisValores,
    SubtracaoDeDoisValores,
    pessoa
}