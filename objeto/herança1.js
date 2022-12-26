const bmw = {
   modelo: "XM",
   velMax : 380
}

const audi = {
  modelo: "sportBack 2019",
  velMax: 320
}

/*
 Todo objeto em js aponta para object.prototype que é seu objeto pai.
 a propriedade __proto__ aponta para o prototype de um objeto, ou seja seu pai
 Os objectos não possuem a propriedade prototype
*/
console.log(bmw.__proto__)
console.log(bmw.__proto__ === Object.prototype)
console.log(audi.__proto__ === Object.prototype)

/**
 *  O Object.prototype não possui prototype, porque ele está acima na hierárquia de prototypes, seu prototype é nulo
 * Todos os objetos criados, com exceção do Object.prototype, posssuem um prototype
 */
console.log(Object.prototype.__proto__)  
console.log(Object.prototype.__proto__ === null)

function meuObjecto(){}

console.log(typeof Object, typeof meuObjecto)

// Todas as funções possuem as propriedades prototype e __proto__, se que referem ao objeto pai do objeto.
console.log(meuObjecto.prototype)
console.log(meuObjecto.__proto__)


