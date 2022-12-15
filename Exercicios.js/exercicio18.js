/*
18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

function escreverPorExtenso(n1){
    let extenso = ""
    switch(n1){
        case 0:
             extenso = "zero"
             break
        case 1:
             extenso = "um"
             break
        case 2:
             extenso = "dois"
             break
        case 3:
             extenso = "três"
             break
        case 4:
             extenso = "quatro"
             break
        case 5:
             extenso = "cinco"
             break
        case 6:
             extenso = "seis"
             break
        case 7:
             extenso = "sete"
             break
        case 8:
             extenso = "oito"
             break
        case 9:
             extenso = "nove"
             break
        case 10:
             extenso = "dez"
             break
        default:
             extenso = "número fora do intervalo"          
    }
   return extenso
}

console.log(escreverPorExtenso(0))
console.log(escreverPorExtenso(1))
console.log(escreverPorExtenso(2))
console.log(escreverPorExtenso(3))
console.log(escreverPorExtenso(4))
console.log(escreverPorExtenso(5))
console.log(escreverPorExtenso(6))
console.log(escreverPorExtenso(7))
console.log(escreverPorExtenso(8))
console.log(escreverPorExtenso(9))
console.log(escreverPorExtenso(10))