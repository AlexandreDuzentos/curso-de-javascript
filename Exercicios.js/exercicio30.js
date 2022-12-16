/**
 * 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

let vetor = [1,2,5,7,8,8,45,37,23,98,25,12,15,17,90]

function maiorEMenorValor(){
    let maior;
    let menor;
for(let i = 0 ; i < vetor.length; i++){ // usar o for aqui
    maior = vetor[0]
    menor = vetor[0]

   if(vetor[i] > maior){
     maior = vetor[i]
   } else if(vetor[i] < menor){
     menor = vetor[i]
   } 
}
 return `MAIOR: ${maior}, MENOR ${menor}`
}

console.log(maiorEMenorValor())