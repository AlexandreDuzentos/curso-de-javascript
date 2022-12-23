const a = 1
const b = 2
const c = 3

const obj1 = {
    a : a,
    b : b,
    c : c
}

console.log(obj1)

const obj2 = {
   a,
   b,
   c
}

const nomeAttr = "Idade"
const valorAttr = 19

const obj3 = {}
obj3.nomeAtrr = valorAttr

/**
 * Consigo usar o conteúdo da chave e do valor de um objeto de uma objeto provenientes de variáveis
 */
obj3[nomeAttr] = valorAttr 
console.log(obj3)

obj4 = {
    [nomeAttr] : valorAttr // A chave e o valor virão de variáveis
}

console.log(obj4)

obj5 = {
    speak : function(){ // Forma tradicional de criação de funções dentro de um objeto

    },

    talk(){ // forma reduzida de criação de funções dentro de um objeto

    }

}

console.log(obj5)