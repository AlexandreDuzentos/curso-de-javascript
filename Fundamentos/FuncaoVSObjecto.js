console.log(typeof Object) // função
console.log(typeof new Object()) // Objecto
console.log(typeof new Object) // mesmo que o exemplo acima

const Cliente = function(){}

console.log(typeof Cliente) // função
console.log(typeof new Cliente()) // Objecto
console.log(typeof new Cliente) // mesmo que o exemplo acima

/* Uma classe é na verdade apenas uma maneira diferente de escrever uma função,regras sintâticas */
class Pessoa {}
console.log(typeof Pessoa) // função
console.log(typeof new Pessoa()) // Objecto
console.log(typeof new Pessoa()) // mesmo que o exemplo acima