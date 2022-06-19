// arrow function

// function somar(a, b) {
//   return a + b
// }

// const somartb = (a, b) => {
//   return a + b
// }

// (a, b) =>  a + b


// spread operator

let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanho']

// console.log(novasCompras)

let impares = [1, 3, 5, 7, 9]
let pares = [0, 2, 4, 6, 8]

const numeros = [...impares, ...pares, 10]
// console.log(numeros)

let argumentos = ['Luine', 'Anne', 'Assueria']
let imprimir = (a, b, c) => console.log(a, b, c)
// imprimir(...argumentos)
// imprimir('Luine', 'Anne', 'Assueria')

let alunaPart1 = { nome: 'Jéssica', cidade: 'Recife' }
let alunaPart2 = { idade: '23', signo: 'Touro' }

let aluna = { ...alunaPart1, ...alunaPart2, corPreferida: 'Turquesa' }
// console.log(aluna)

let somar = (a, b, ...args) => {
    console.log(args)
    const c = args.reduce((previous, current) => previous + current)
    console.log(c)
    console.log(a + b + c);
}

// somar(2, 5, 8, 2, 9, 10, 7, 3 ,5)

//desestruturação

const arr = [5, 3, 7, 1, 9]

const [primeiro, segundo, ...terceiro] = arr
// console.log(primeiro)
// console.log(segundo)
// console.log(terceiro)

let estudante = { ...alunaPart1, ...alunaPart2, corPreferida: 'Turquesa' }
// console.log(estudante)
console.log(estudante.signo)

const { signo, corPreferida, ...obj } = estudante
console.log(signo)
console.log(obj)
