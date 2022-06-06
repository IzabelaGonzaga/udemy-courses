//string 
let nome: string = 'João';
console.log(nome);

//numbers
let idade: number = 27;
//pode ser inteiro ou com ponto flutuante
idade = 27.5;
console.log(idade);

//boolean
let possuiHobbies: boolean = false;
console.log(possuiHobbies);

//tipos explícitos
let minhaIdade: number;
minhaIdade = 25;
console.log(typeof minhaIdade);

//array
let hobbies: any[] = ['cozinhar', 'praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 4];
console.log(hobbies);

//tuplas: array com itens de diferentes tipos
let endereco: [string, number, string] = ['Av Principal', 99, ''];
console.log(endereco);

endereco = ['Rua Importante', 1260, 'Bloco C'];
console.log(endereco);

//enums
enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 10, //10
    Laranja, //11
    Amarelo, //12
    Vermelho = 100 //100
}

let minhaCor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

//any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);


