function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome : "Notebook",
    preco : 4589,
    desc : 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco : 49990 , desc : 0.20}

/*
A diferença entre o call e o apply é que  o call recebe os argumementos separadamente, e o apply
recebe os argumentos como um array.

CALL e APPLY : são funções que fazem com o this dentro de uma função aponte para um objeto específicado.

Dentro do call, os parâmetros passados após ao objeto, são passados separadamente e representam os argumentos passados
para função que foi chamada a partir da função call

Dentro do apply, os parâmetros passados após ao objeto, são passados como um array e representam os argumentos passados
para função que foi chamada a partir da função call
 */

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro,[0.17,'$']))

console.log(getPreco.call(global,0.20,'AO'))
console.log(getPreco.apply(global,[0.40,'AO']))
