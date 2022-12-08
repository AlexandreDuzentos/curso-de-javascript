//Armazenando uma função em uma variável
const imprimirSoma = function(a,b)
{
  console.log(a + b)
}

imprimirSoma(4,90)

//Armazenando uma função arrow em uma variável

const soma = (a,b) => {
    return a + b
}

console.log(soma(12,59))

const subtracao = (a,b) => a - b

console.log(subtracao(4,9))

const imprimirQualquerCoisa = a => console.log(a)

imprimirQualquerCoisa("Amo a linguagem JAVA!")