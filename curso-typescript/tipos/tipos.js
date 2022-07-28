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
let funcionario = {
    supervisores: ['Ana', 'Carlos', 'Maria'],
    baterPonto(horario) {
        return horario <= 8 ? 'Ponto normal.' : 'Fora do horário.';
    }
};
let funcionario2 = {
    supervisores: ['Beatriz', 'Lucas', 'Mariana'],
    baterPonto(horario) {
        return horario <= 8 ? 'Ponto normal.' : 'Fora do horário.';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//Checando tipos (como seria sem o ts, no js)
let valor = 30;
if (typeof valor === 'number') {
    console.log('É um number!');
}
else {
    console.log(typeof valor);
}
//never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
//ultizando valores com tipo null
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
