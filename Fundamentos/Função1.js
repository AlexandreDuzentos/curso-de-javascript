//Função sem retorno
function imprimirSoma(a,b)
{
  console.log(a + b)
}

imprimirSoma(5,7)

/* Retornará NaN(not a number), porque a função requer dois argumentos obrigatórios,e apenas um foi
passado, o segundo argumento assumiu por padrão undefined, porque não foi definido, então a soma entre 5 e undefined resulta em NaN*/ 
imprimirSoma(5) 

// A função pegará apenas os argumentos correspondentes ao número de argumentos definidos na função,os restantes argumentos serão ignorados
imprimirSoma(6,14,3,7,9,7,5) 

imprimirSoma() //Retorná NaN porque nenhum dos argumentos definidos na função foram passados

// função com retorno
function soma(a,b)
{
    return a + b
}

console.log(soma(4,9))
