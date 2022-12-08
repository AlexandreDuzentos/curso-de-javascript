/*Atribuição por valor e por referência*/ 

// Atribuição por valor : nessa atribuição é feita uma cópia do valor de uma variável para outra.

/*Atribuição por referência : nessa atribuição é feita uma cópia da referência de uma variável para outra,
na atribuição por referência duas variáveis passam a apontar para a mesma referência de memória
Oque faz com que ,se eu modificar o valor de uma da variáveis, o valor de outra também sofrerá alterações,
é como se eu fosse na memória e alterasse o valor da referência*/


// Retornara um undefined porque a variável foi declarada,mas não foi inicializada.
let valor //não inicializada
console.log(valor)
//console.log(valor2) Retornará um is not defined por a variável não foi declarada

valor = null // Ausência de valor: usamos quando queremos zerar o valor de um tipo referência(objecto)
console.log(valor)

const produto = {}
console.log(produto.preco)//Retornará undefined porque o objecto for declarado,mas o atributo acesso não foi definido.

console.log(produto) // Imprimirá o objecto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined,deixe isso para a linguagem
// undefined é falso

console.log(!!produto.preco)
delete produto.preco
//console.log(produto.preco)

produto.preco = null // sem preço
console.log(produto.preco)
