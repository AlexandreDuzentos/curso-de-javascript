function meuObjeto(){}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__) // {} aponta para um objeto vazio
console.log(obj2.__proto__) // {} aponta para um  objeto vazio
console.log(meuObjeto.prototype) // {} aponta para um  objeto vazio
console.log(meuObjeto.__proto__)// {} aponta para um  objeto vazio

console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(meuObjeto.prototype === obj1.__proto__) // true

/*
  definindo funções e propriedades no prototype da função meuObjecto
 */
meuObjeto.prototype.nome = "Martins" // definindo uma propriedade para o prototype  da função meuObjeto
meuObjeto.prototype.speak = function(){ // definindo uma função para o prototype  da função meuObjeto
    return `Bom dia, meu nome é ${this.nome}`
}

/**
 * o prototype dessa função, agora possui um objeto com conteúdo,sendo um atributo nome e uma função
 *  speak
 */
console.log(meuObjeto.prototype) 

/**
 * os objetos gerados a partir da instância da função meuObjeto, também podem acessar as propriedades e funções definidas
 *  na prototype da função meuObjeto
 */
console.log(obj1.speak()) 

obj1.nome = "Alexandre"
console.log(obj1.speak())