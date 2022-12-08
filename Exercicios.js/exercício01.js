/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */

function operacoes(n1,n2){
    return `soma n1 + n2 = ${n1 + n2} subtracao n1 - n2 = ${n1 - n2} 
    multiplicação n1 * n2 = ${n1 * n2} divisão n1 / n2 = ${(n1 / n2).toFixed(2)} `
}

console.log(operacoes(5,9))