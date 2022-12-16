/**
 *  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

let vetor = [10,11,12,13,14,15]

mediaAritmetica = 0

for(let i = 0; i < vetor.length; i++){
    mediaAritmetica += vetor[i] /vetor.length
}

console.log(mediaAritmetica)