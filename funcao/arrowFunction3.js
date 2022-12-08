/* TRABALHANDO NO CONTEXTO DE EXECUÇÃO DO NODE */

// O objecto window não existe dentro do contexto do node, existe o objecto global

// Numa função tradicional o this aponta para o objecto global
let comparaComThis = function(param){
    console.log(param === this)
}


const objecto = {}
// A função bind retornará a função chamada a partir dela apontando para o objecto específicado
compare = comparaComThis.bind(objecto) 
compare(global)

/*Dentro de uma função arrow, o this não aponta para o objecto global */
/*
Porquê que dentro de uma função arrow o this não aponta para o objecto global?
R: Porque a função arrow foi definida dentro de um módulo do node,e no contexto do node, o this
não aponta para o global, aponta para o próprio módulo do node em que a função que foi definida,
esse módulo é representado por um objecto(module.exports).
*/ 

let comparaComThisArrow = (param) => console.log(param === this)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // o this dentro de uma função arrow aponta para o objecto module.exports
comparaComThisArrow = comparaComThisArrow.bind(global) // Não é possível mudar a referência do this dentro de uma arrow function com a função bind.
comparaComThisArrow(global)

console.log(typeof this)
console.log(typeof global)





