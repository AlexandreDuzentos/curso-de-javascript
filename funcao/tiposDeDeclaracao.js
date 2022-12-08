console.log(soma(4,8))

/*
A vantagem de usar a function declaration é que ela é por padrão carregada no arquivo antes da execução
logo ela pode ser acessada acima da declaração da função;
*/
// Function declaration
function soma(a,b){
    return a + b
}

// Function expression
const mult = function(a, b){
    return a * b
}

console.log(mult(4,9))


// named function expression
const sub = function sub(a,b){
    return a - b
}

console.log(sub(5,24))