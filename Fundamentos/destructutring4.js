function rand([min = 98,max = 100]){
  if(min > max) [min,max] = [max,min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let array = []
//console.log(rand(array))
console.log(rand([8,5]))