/**
 * 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

const vetorInicial = [1,2,3,4,5,6,7,8,9]
let n1 = 5

// Função 1
function arrayMultiplica(vetor,n1){
    const vetorFinal = []
    for(let i = 0; i < vetor.length; i++){
        vetorFinal.push(vetor[i] * n1 )
    }
    return vetorFinal;
}

console.log(arrayMultiplica(vetorInicial, n1))

// Função 2
function arrayMultiplica2(vetor, n1){
    const vetorFinal = []
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
          vetorFinal.push(vetor[i] * n1 )
        }    
    }
    return vetorFinal;
}

console.log(arrayMultiplica2(vetorInicial, n1))