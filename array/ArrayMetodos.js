const pilotos = ["Vettel", "Alonso", "Raikonnen", "Massa"]

/**
 * funções que acrescem elementos ao array : push, unshift
 * função de removem elementos do array : pop, shift
 */

/* remove o útimo elemento do array e retorna-o */
let lastElement = pilotos.pop() 
console.log(`Elemento removido da última posição do array: ${lastElement}`)

console.log("---------------------------------------------")

/* Adiciona novos elementos ao array e retorna o seu novo comprimento(length)*/
let arrayLength1 = pilotos.push("verstappen", "Alexandre")
console.log(`Comprimento do array após remoção de elemento:  ${arrayLength1}`)

console.log("---------------------------------------------")

/* Remove o primeiro elemento de um array e retorna-o */
let firstElement = pilotos.shift()
console.log(`Elemento removido da primeira posição do array: ${firstElement}`)

console.log("---------------------------------------------")

/** Insere um novo elemento no array e retorna o seu novo comprimento(length) */
let arrayLength2 = pilotos.unshift("Hamilton")
console.log(`Comprimento do array após adição de elemento:  ${arrayLength2}`)

console.log("---------------------------------------------")


console.log(pilotos)

console.log("---------------------------------------------")

/** Remove elementos do array e, se necessário, insere novos elementos no lugar deles  e retorna os
 * elementos deletados
 *
 * Remove e insere elementos no array
*/
let removedElements = pilotos.splice(1, 2, "Bottas", "Massa")
console.log(`Elementos removidos : ${removedElements}`)

console.log(pilotos)

console.log("---------------------------------------------")

/**
 * retorna uma cópia de um seção do array a partir dos índices específicados
 * o último índice específicado não fica incluído no novo array
 * retorna um novo array
 */
const algunsPilotos1 = pilotos.slice(2) 

console.log(`Cópia de uma seção do novo array1 : ${algunsPilotos1}`)

console.log("---------------------------------------------")

const algunsPilotos2 = pilotos.slice(1,3) 

console.log(`Cópia de uma seção do novo array2 : ${algunsPilotos2}`)





