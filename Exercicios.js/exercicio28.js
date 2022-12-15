/**
 * 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

let numsInt = [,2,7,8,9,3,4,5,7,12,56,78,34,32,67,453,6,97]
let par = 0
let impar = 0

numsInt.forEach(function(index, value){
   if(value % 2 == 0){
     par++
   } else {
     impar++
   }
})

console.log(`Pares : ${par},  Ímpares : ${impar}`)