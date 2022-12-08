// Hoisting é um comportamento padrão do javascript de mover declarações para o topo(funciona para variáveis declaradas com o var, com o let não funciona)

console.log("a =", a)
var a = 10;
console.log("a", a)

//console.log("b = ",b)
let b = 10;
console.log("b = ",b);