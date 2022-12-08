// Função em js em first-class object (citzen)(objecto ou cidadão de primeira classe)
// higher order function(função de alta ordem) - no mundo do funcional

/*
 No js uma função pode ser tratada como se fosse um dado, e sendo um dado, ela pode ser passada como parâmetro,
consigo retornar uma função como resposta de uma função,pode-se armazenar uma função em uma variável, uma função pode ter
uma outra função dentro dela. esse tratamento da função como um dado, abre um leque de possiblidades gigantescos.
*/

// Criar de forma literal
function fun1(){} 

//Armazenar em uma variável
let fun2 = function (){}

//Armazenar em um array
let array = [function soma(a,b){return a + b},fun1, fun2]
console.log(array[0](4,8))

//Atribuir para uma posição do array
array[5] = function mult(a,b) {return a * b}
console.log(array)

//Armazenar em um atributo de objecto
const obj = {}
obj.falar = function(){return "Estou falando..."}

const{falar} = obj
console.log(falar())

//Passar função como parâmetro
function run(fun){
  if(typeof fun == "function"){
    console.log("É uma função! " + fun())
  }
}

run(function(){return "Executando..."} )

//Uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c,d){
        console.log(a + b + c * d)
  }
}

soma(5,5)(5,5)

const cincoMais = soma(4,6) // A função soma retorna uma função
cincoMais(5)

