// o argument é um array interno de toda função, que me permite pegar os parametro passados
function soma(){
    let soma = 0
    for(index in arguments){
        soma += arguments[index]
    }
    return soma;
   
}

console.log(soma(2,4,5,7,8,4))
console.log(soma(12,45,67,234,890))
console.log(soma(2,5,"Opá"))
console.log("a","b","c")


function mult(){
  let mult = 1
  for(index in arguments){
    mult *= arguments[index]
  }
  return mult
   
}

console.log(mult(4,"Opá"))