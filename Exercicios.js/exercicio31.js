/**
 * 1) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */

let vetor = [1,2,5,7,8,-8,-45,37,-23,98,25,-12,15,17,-90]

let negativos = 0

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] < 0){
       negativos++
    }
}

console.log(negativos)