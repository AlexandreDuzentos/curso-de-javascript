/**
 * 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
 */




let nome1 = "Alexandre"
let nome2 = "Alexandrelson" 


function caracteresIguais(nome1,nome2){
    let bool;
    for(let i = 0 ;i < nome1.length; i++){
      if(nome1[i] == nome2.substring(0,nome1.length)[i]){
         bool = true
      } else {
         bool = false
      }       
    }  
    return bool
}

console.log(caracteresIguais(nome1, nome2))


const vetor1 = [1,2,3,4,5,6]
const vetor2 = [7,8,9,10,11,12,16,17]

//Percorrendo um array
for(let i = 0; i < vetor1.length; i++){
    for(let j = 0; j < vetor2.length; j++){
        console.log(`vetor1 ${vetor1[i]} , vetor2 ${vetor2[j]}`)
    }
}

