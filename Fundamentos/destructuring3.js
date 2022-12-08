function rand({min = 4,max = 8}){
  const valor = Math.random()  * (max - min) + min;
  return Math.floor(valor);
}

const obj = {
    min : 10,
    max: 20
}

//console.log(rand(obj))
//console.log(rand({min: 4,max:6}))
//console.log(rand({min:4}))
console.log(rand({}))