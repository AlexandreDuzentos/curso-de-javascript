/*Uma funçào anónima é simplesmente uma função sem nome*/ 
const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, funcao = soma){
    console.log(funcao(a,b))
}

imprimirResultado(4,9)
imprimirResultado(3,7, soma)
imprimirResultado(2,6, function(x,y){
     return x - y
})

imprimirResultado(4,7,(x,y) => {
    return x * y
})

const pessoa = {
    falar : function(){
        console.log("Opá")
    }
}

pessoa.falar()