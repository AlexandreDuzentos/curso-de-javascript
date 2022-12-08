/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function divisivelPorTres(numero){
   if(Number.isInteger(numero)){
     if(numero % 3 == 0){
        console.log(`O número ${numero} é divisivel por 3`)
     } else {
        console.log(`O número ${numero} não é divisível por 3`)
     }
   } else {
        console.log(`O valor passado ${numero} não é inteiro`)
   }
}

divisivelPorTres('u')