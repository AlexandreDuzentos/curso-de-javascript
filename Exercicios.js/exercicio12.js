/* 
Faça um algoritmo que calcule o fatorial de um número.
 */

//5 * 5 * 4 * 3 * 2 * 1

function calcularFatorial(valor){
    let fatorial = 1
    let fatorialDe = valor

    for(let i = fatorialDe; i >= 1; i--){
        fatorial = fatorial * i
        }

    return fatorial

}

console.log(calcularFatorial(7))
