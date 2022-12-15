/**
 * 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

let vetor = [1,2,5,7,8,8,45,37,23,98,25,12,15,17,90]

function maiorEMenorValor(){
vetor.forEach(function(index,value){ // usar o for aqui
   let posicao0 = vetor[0]
   let maior = posicao0
   let menor = posicao0

   if(value > maior){
     maior = value
   } else if(value < menor){
     menor = value
   }

   
})

   return `Maior ${maior}, Menor ${menor}`
}