/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

function calculaJurosSimples(capitalInicial, taxaDeJuros,tempoDeAplicacao){
   return capitalInicial * (taxaDeJuros/100) * tempoDeAplicacao 
}

function calculaJurosCompostos(capitalInicial, taxaDeJuros,tempoDeAplicacao){
     return (capitalInicial * ((taxaDeJuros/100) + 1) ** tempoDeAplicacao).toFixed(2)
}

console.log(calculaJurosSimples(1000,36,6))
console.log(calculaJurosCompostos(1000,36,6))
