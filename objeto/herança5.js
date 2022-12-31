/*
  Toda função possui um atributo chamado prototype e a partir dele, eu posso definir atributos e funções
  ao prototype de um determinado tipo de dado(que é uma função em javascript)
 */ 
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
console.log(typeof Number)

String.prototype.reverse = function(){
    return this.split('').reverse().join()
}

let nome = "CEO AO"

// a função split converte a string em array, tornando cada caractere da string em um elemento do array
let splitted = nome.split('') 

// a função reverse inverte a ordem dos elementos de um array
let reversedArray = splitted.reverse()

// a função join converte um array para uma string
let joinedArray = reversedArray.join()

console.log(nome.reverse())

Array.prototype.first = function(){
  return this[0]
}

console.log([1,2,3,4,5,6].first())


String.prototype.toString = function(){
    return "Lascou tudo"
}

console.log(nome.toString())