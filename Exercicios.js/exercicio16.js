/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calculadoraBasica(n1,n2, sinal){
    let operacao = ""
   switch(sinal){
     case "+":
        operacao = n1 + n2
        break
    case "-":
        operacao = n1 - n2
        break
    case "*":
        operacao = n1 * n2
        break;
    case "/":
        operacao = n1 / n2
        break
    default:
        operacao = "operação inválida"
   }

   return operacao
}

console.log(calculadoraBasica(9,9, "+")) // 18
console.log(calculadoraBasica(9,9, "-")) // 0
console.log(calculadoraBasica(9,9, "*")) // 81
console.log(calculadoraBasica(9,9, "/")) // 1
console.log(calculadoraBasica(9,9, "%")) // operação inválida