
/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi pago e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

// mesPago - 1 é para que os meses não sejam pagos incluíndo  o mes de janeiro, uma vez que em janeiro não se paga com juros compostos.
function calcularValor(mesPago, valorAnuidade){
    if(mes > 0 && mes < 13) {
        atraso = mesPago - 1 
        return (valorAnuidade * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(5,50))

