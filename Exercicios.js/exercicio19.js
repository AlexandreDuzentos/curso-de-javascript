function valorASerPago(código, qtde){
    let precoTotal = ""
    switch(código){
          case 100:
               precoTotal = qtde * 3.00
               break
          case 200:
                precoTotal = qtde * 4.00
                break
           case 300:
                precoTotal = qtde * 5.50
                break
           case 400:
               precoTotal = qtde * 7.50
               break
           case 500:
               precoTotal = qtde * 3.50
               break
           case 600:
               precoTotal = qtde * 2.80
               break
            default:
                precoTotal = "produto não existente"
    }
    return precoTotal
}

console.log(valorASerPago(100,3))
console.log(valorASerPago(200,3))
console.log(valorASerPago(300,3))
console.log(valorASerPago(400,3))
console.log(valorASerPago(500,3))
console.log(valorASerPago(600,3))