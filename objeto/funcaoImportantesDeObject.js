const pessoa = {
    nome : "Martins",
    idade : 26,
    peso : 75

}

console.log(Object.keys(pessoa)) // Retorna as chaves das propriedades enumeráveis do objeto
console.log(Object.values(pessoa)) // Retorna os valores das propriedades enumeráveis do objeto
console.log(Object.entries(pessoa)) // Retorna um array chaves e valores das propriedades enumeráveis do objeto

let array = Object.entries(pessoa)

console.log("----------------------------------")

// Imprimirá o valor da posição do array e seu respectivo índice
array.forEach((value, index) => {
   console.log(value,index)
})

console.log("-----------------------------------")

// Desestruturará o array, dando o aceso direto a seus elementos
array.forEach(function([elemento1, elemento2]){
    console.log(`Chave: ${elemento1}, Valor: ${elemento2}`)
})

console.log("---------------------------------------")

// Define uma propriedade de um objeto com pré-definições
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // Definirá se a propriedade é listável ou não, mas será acessível específicamente
    writable : true, // Definirá se a propriedade é modificável ou não
    value : "25/12/2022" // Definira um valor para a propriedade
})

console.log(pessoa) // não retornára a propriedade dataNascimento por ela foi definida como não listável
console.log('Object.keys: '+ Object.keys(pessoa)) // atributo dataNascimento não será listada nas chaves
console.log('Object.values: '+ Object.values(pessoa)) // valor de dataNascimento não será listada nos valores


console.log(pessoa.dataNascimento)

console.log("MODFICANDO VALOR DE PROPRIEDADE MODIFICÁVEL:")
pessoa.dataNascimento = "12/09/2017" 

console.log(pessoa.dataNascimento)


// Object.assign (ECMASscript 2015)

const dest = {a : 1}
const o1 = {b : 2}
const o2 = {c:3 , a:4}

// Concatena objectos, o primeiro parâmetro passado é o objecto de destino, os restantes são os concatenados.
const obj = Object.assign(dest,o1, o2)

console.log(obj)

Object.freeze(obj) // previne a modificação de atributos e a adição de novos atributos

obj.a = 80 // não sutirá qualquer efeito de moficação de valor no objeto
obj.z = 12 // não surtirá qualquer efeito de adição de atributos no objeto

console.log(obj)

const person = {
    first_name: "Alexandre",
    last_name: "Duzentos",
    email: "Aduzentos12@gmail.com"
}

Object.freeze(person)

delete person.first_name // não deletará o atributo do objeto

/**
 * O object.freeze() congela o objeto, não permitindo modificações em seu estado, apenas acesso a seu estado
 */
