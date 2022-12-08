/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function clasificaDia(dia){
    let classificacao = ""
    switch(dia){
       case 1:
          classificacao = "fim de semana"
          break
       case 2:
          classificacao = "dia útil"
          break
       case 3:
          classificacao = "dia útil"
          break
       case 4:
          classificacao = "dia útil"
          break
       case 5:
          classificacao = "dia útil"
          break
       case 6:
          classificacao = "dia útil"
          break 
        case 7:
          classificacao = "fim de semana"
          break
        default:
            classificacao = "Dia inválido"
    }

    return classificacao
}

console.log(clasificaDia(1)) // Fim de semana
console.log(clasificaDia(2)) // dia útil
console.log(clasificaDia(8)) // dia inválido