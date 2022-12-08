const pessoa = {
    nome : 'Alexandre',
    idade : 19,
    endereco : {
        logradouro : 'Rua ABC',
        numero : 1338,
    }
}

//Operador destructuring é um operador que extrai elementos de uma estrutura.

const {nome , idade} = pessoa
console.log(nome,idade)

// É possível dar um alias ao atributo original do objecto
const {nome:n, idade:i} = pessoa
console.log(n,i)

// é possivel acessar objectos um objecto dentro de outro objecto
const {endereco:{logradouro,numero}} = pessoa

console.log(logradouro,numero)

// Não é possível desestruturar atributos que não existam em um objecto
const {sobrenome, altura} = pessoa
console.log(sobrenome,altura)

// É Possível definir um valor para um atributo inexistente no objecto
const {lastName,height = 1.87} = pessoa
console.log(lastName,height)

// É Possível definir um valor para um atributo existente no objecto
const {na,age = 19 } = pessoa
console.log(na,age)
