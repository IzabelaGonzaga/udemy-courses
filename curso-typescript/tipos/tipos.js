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
