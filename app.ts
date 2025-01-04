// const soma = (a: number, b: number) => {
//     console.log(a + b);
// }

// soma(2, 2)
// soma(6, 3)
let b: string = 'Miles';
let c: string = 'Elenwood';

let m: any = 3 // any quer dizer que pode receber qualquer tipo
let n: number = 2;
let x: boolean = false;

// unkwnown vs any
// any aceita qualquer tipo, unkwnown tbm, mas enquanto any nao precisa de validação o unkwnown precisa.

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string // esse parametro é opcional, colocar o '?' o torna assim
}

const pessoa: Pessoa = {
    nome: 'Miles',
    idade: 19,
    profissao: 'Marinheiro'
}

const outraPessoa: Pessoa = {
    nome: 'Elenwood',
    idade: 23
}

const arrayPessoa: Array<Pessoa> = [ // < > é um operador generics
// const arrayPessoa: Pessoa[] = [     // da pra declarar dessas duas formas
    pessoa,
    outraPessoa,
]

const arrayNum: number[] = [
    1,2,3
]

const arrayString: Array<string> = [
    'a', 'b', 'c'
]
// console.log(arrayPessoa)

//  estrutura de decisao

const num: number = 5;

if (num > 5) {
    console.log('Maior que 5')
} else if (num < 5) {
    console.log('Menor que 5')
} else {
    console.log('Igual a 5')    
}

const typeUser = {
    admin: 'Seja bem vindo admin',
    stundent: 'Seja bem vindo estudante',
    viewer: 'Você pode visualizar',
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
    // essa pode ser usada como chave para nosso tipo typeUser
}

const user = 'viewer'

validateUser(user)

for (let i = 0; i < 5; i++) {
    console.log(i)
}

let nm = 0
while (nm < 5) {
    console.log(nm)
    nm++
}

