"use strict";
//string 
let nome = 'João';
console.log(nome);
//numbers
let idade = 27;
//pode ser inteiro ou com ponto flutuante
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
//tipos explícitos
let minhaIdade;
minhaIdade = 25;
console.log(typeof minhaIdade);
//array
let hobbies = ['cozinhar', 'praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 4];
console.log(hobbies);
//tuplas: array com itens de diferentes tipos
let endereco = ['Av Principal', 99, ''];
console.log(endereco);
endereco = ['Rua Importante', 1260, 'Bloco C'];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; //100
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funções
//função com retorno tipado
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
//função sem retorno
function digaOi() {
    console.log('Oi!');
}
digaOi();
//função com parâmetros e retorno tipados
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4, 9));
console.log(multiplicar(4.5, 2));
//tipo função
let calculo;
// calculo = () => digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
let usuario = {
    nome: 'João',
    idade: 26
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
//Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (>8)
*/
//Resolução
let funcionario;
funcionario = {
    supervisores: ['Ana', 'Carlos', 'Maria'],
    baterPonto(horario) {
        return horario <= 8 ? 'Ponto normal.' : 'Fora do horário.';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
