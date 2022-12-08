/*TODA FUNÇÃO ARROW É SEMPRE UMA FUNÇÃO ANÓNIMA */


// Função anónima
let dobro = function(a){
   return a * 2
}

console.log(dobro(5))

// Função arrow com return explícito
dobro = (a) => {
    return a * 2
}

console.log(dobro(3))

//Funçào arrow com return implícito
dobro = a => a * 2 
console.log(dobro(8))

// Função arrow com retorna implícitos e em parâmetros
let saudar = () => "Olá"
console.log(saudar())

//Função arrow com return implícito e com parâmetro
let saudar2 = _ => _
console.log(saudar2(5))



