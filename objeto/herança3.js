const pai = {nome: "Alexandre", corCabelo: "Preto"}

const filha1 = Object.create(pai);
filha1.nome = "Mariana"
console.log(filha1.corCabelo,filha1.nome)

console.log("------------------------------------")

const filha2 = Object.create(pai, {
    // o atributo nome do objeto filha2 fara um shadowing(sombreamento) no atributo nome de seu pai(protótipo)
    nome : {value : 'bia', writable : false, enumerable : true} 
})

console.log(filha2.nome)
filha2.nome = "Jessica"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log("------------------------------------")

console.log(Object.keys(filha1)) //  Listará os atributos originais do objecto filha1, não os herdados
console.log(Object.keys(filha2)) // Listará os atributos originais do objecto filha2, não os herdados


console.log("------------------------------------")

/* 
o for in lista os atributos originais e os herdados do objeto
o método hasOwnProperty verifica se uma propriedade pertence ao objeto directamento
*/
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(`Atributo original ${key}`) 
    : console.log(`Atributo herdado ${key}`)    
}
