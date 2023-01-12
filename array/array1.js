/**
 * No javascript um array é uma estrutura dinâmica, ou seja cresce dinâmicamente, diminui dinâmicamente, é
 * uma estrura indexada, ou seja, os elementos são acessados através de índices, e um array é um objeto
 * em javascript
 */

// o operador new usado junto de um função(new nome_funcao) o resultado é um objeto

// um array em javascript é um objeto
console.log(typeof Array, typeof new Array(), typeof new Array, typeof [])

/* Formas de criar um array */

// 1 - instância do objeto Array
let aprovados = new Array("Alexandre","Ana","Leonel")
console.log(aprovados)

// 2 - notação literal
aprovados = ["Alexandre","Ana", "Leonel"]

console.log(aprovados[0]) // acessando uma posição específica do array
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // quando acessamos um índice não existe em um array é retornado undefined

aprovados[3] = "Mateus" // Adicionando um elemento em uma posição específica do array
aprovados.push("Paulo") // Adiciona um elemento a última posição do array

console.log(aprovados) // imprimindo o array

console.log(aprovados.length) // imprimindo o comprimento do array(quantidade de elementos)

/**
 * Quando um elemento é adicionado em um array pulando índices, os índices em que não foram
  adicionados valores estarão vázios e retornarão undefined quando acessados.
 */
aprovados[10] = "Akeny" // Adicionado elemento em uma posição específica do array(pulando outros elementos)

console.log(aprovados[8] === undefined) // retornará true

console.log(aprovados)

aprovados.sort() // a função sort ordena o array orginal, não gera um novo array

console.log(aprovados)

delete aprovados[3] // elimina um índice específico do array

console.log(aprovados)

aprovados = ["Alexandre","Akeny","Banguito"]

/**
 * 1 argumento passado é o índice do array que se pretende trabalhar
 * 2 argumento passado é o número de elementos que se pretende remover do array a partir do primeiro
 * argumento passado
 * 
 * 3 argumento passado são os elementos a inserir no array
 */
aprovados.splice(0,1, "Elemento 1","Elemento 2"); // a função splice adiciona e remove elementos de um array

console.log(aprovados);







