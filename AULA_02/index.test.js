// Importa o arquivo index onde estão todas as funções
const index = require("./index");

// Teste da função de soma de dois valores que vem do arquivo index
test("Soma de dois valores!", () => {
    expect(index.SomaDoisValores(1, 1)).toBe(2); // index.SomaDoisValores passa quais são os valores dentro do parenteses || toBe passa o valor que é esperado
});

// Teste da função de multiplicação de dois valores que vem do arquivo index
test("Teste da multiplicação de dois valores", () => {
    expect(index.MultipicaDoisValores(3, 3)).toBe(9); // multiplica os valores dentro dos parenteses e passa o resultado esperado no ToBe
});

// Teste da função de divisão de dois valores que vem do arquivo index
test("Teste da divisão de dois valores", () => {
    expect(index.DivisaoDeDoisValores(10, 5)).toBe(2); // divide os valores dentro dos parenteses e passa o resultado esperado no ToBe
});

// Teste da função de subtração de dois valores que vem do arquivo index
test("Teste da divisão de dois valores", () => {
    expect(index.SubtracaoDeDoisValores(8, 4)).toBe(4); // subtrai os valores dentro dos parenteses e passa o resultado esperado no ToBe
});

// Teste da função que mostra as informações de uma pessoa que esta na função
test("Mostra pessoas: ", () => {
    expect(index.pessoa()).toEqual({
        id: 1,
        nome: "Gabriel",
        idade: 17
    });
});