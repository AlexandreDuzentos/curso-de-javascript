const quaseArray = {0:'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})

/**
 * Acesso a elemento do objeto através da notação de colchetes
 */
console.log(quaseArray[0])

const meuArray = ["Rafael", "Ana", "Bia"]

console.log(meuArray, quaseArray.toString())