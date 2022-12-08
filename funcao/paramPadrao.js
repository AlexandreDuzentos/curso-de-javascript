// Estratégia 1 para gerar valor padrão

function soma1(a,b,c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c
}

console.log(soma1(),soma1(6), soma1(2,8,9),soma1(0,0,0))

// Estrategia 2 para gerar valor padrão
function soma2(a,b,c){
   a = a !== undefined ? a : 1
   b = 1 in arguments ? b : 1
   c = isNaN(c) ? 1 : c

   return a + b + c
}

console.log(soma2(),soma2(3),soma2(3,7,9))

// Estratégia 3 para gerar valor padrão
function soma3(a = 1, b = 1, c = 1){
   return a + b + c
}

console.log(soma3(),soma3(7),soma3(2,4,7))


// o null é igual ao undefined, mas não é estritamente igual ao undefined
function testeNullUndefined(a,b){
    if(a == b){
        console.log(`${a} é igual a ${b}`)
    } else {
        console.log(`${a} é diferente de ${b}`)
    }
}

testeNullUndefined(null, undefined)


