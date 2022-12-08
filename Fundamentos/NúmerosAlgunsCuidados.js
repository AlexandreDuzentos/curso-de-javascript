console.log(8 / 0) //Retorna infinity
console.log("4" / "2") // interpreta os valores entre aspas de forma literal e realiza a divisão
console.log("4" / 2)
console.log("2" + 5) // String ganha
console.log("2" - 5) // string perde
console.log("Yes" * 5) //Retorna NaN(NOT A NUMBER)
console.log(0.1 + 0.8) 
/* Retorna um valor impreciso por causa da especificação que o JS usa, oque torna
bem mais rápido do que o resultado exato*/

//console.log(10.toFixed(5)) não é possível chamar uma função a partir do valor literal
console.log((9).toFixed(3))