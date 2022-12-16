/**
 * 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */


const vetorInteiro = [1,2,3,4]
const vetorString = ["Alexandre", "Akeny", "Banguito"]
const vetorDecimal = [1.2,2.2,3.3]

let arraysUnidos = vetorInteiro.concat(vetorDecimal)
let arraysUnidos2 = vetorDecimal.concat(vetorString)
console.log(arraysUnidos)
console.log(arraysUnidos2)

