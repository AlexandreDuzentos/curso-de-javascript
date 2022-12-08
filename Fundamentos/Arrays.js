const valores = [9.5,4.5,7.9,1.2,67.4]
console.log(valores[3],valores[1]);
console.log(valores[4])

console.log(valores)

console.log(valores.length)

valores.push({id : 3}, null, Infinity, undefined,["Alexandre",18,34,"Marcos"])
console.log(valores)

valores.pop()
delete valores[7]

console.log(valores)