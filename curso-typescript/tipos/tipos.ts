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

//funções
//função com retorno tipado
function retornaMeuNome(): string {
    return nome;
}

console.log(retornaMeuNome());

//função sem retorno
function digaOi(): void {
    console.log('Oi!');
}

digaOi();

//função com parâmetros e retorno tipados
function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(4,9));
console.log(multiplicar(4.5,2));

//tipo função
let calculo: (numeroA: number, numeroB: number) => number;
// calculo = () => digaOi;
// calculo();

calculo = multiplicar;
console.log(calculo(5,6));

//objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 26
}

console.log(usuario);


// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria'
}

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

//tipos personalizados (alias)
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
};

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Carlos', 'Maria'],
    baterPonto(horario: number): string  {
        return horario <= 8 ? 'Ponto normal.' : 'Fora do horário.';
    }
};

let funcionario2: Funcionario = {
    supervisores: ['Beatriz', 'Lucas', 'Mariana'],
    baterPonto(horario: number): string  {
        return horario <= 8 ? 'Ponto normal.' : 'Fora do horário.';
    }
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

//Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);

nota = '10';
console.log(`Minha nota é ${nota}!`);

//Checando tipos (como seria sem o ts, no js)
let valor = 30;

if (typeof valor === 'number') {
    console.log('É um number!');
} else {
    console.log(typeof valor);
}

//never
function falha(msg: string): never{
    throw new Error(msg);
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if(this.preco < 0) {
            falha('Preço inválido!');
        }
    }
};

produto.validarProduto();

//ultizando valores com tipo null
let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
};

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

//Desafio
/* Transformando código JS em TS */

//Resolução
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): void {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000);
console.log(correntista);