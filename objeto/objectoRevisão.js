// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = "Genérica"
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)


const carro = {
    modelo : "BMW X6",
    valor: 89000,
    proprietário : {
        nome : "Alexandre",
        idade : 29,
        endereco : {
            logradouro : "Rua ABC",
            numero : 123
        }
    },
    condutores : [{
       nome : "Alexandre",
       sobrenome : "Duzentos",
       idade : 19
    }, {
       nome : "João",
       sobrenome : "Duzentos",
       idade : 23
    }],
    calcularValorSeguro : function (){

    }

}

// Acesso aninhado a propriedades através da notação ponto
carro.proprietário.endereco.numero = 1000

/* Acesso aninhado a propriedades através da notação de colchetes - é possível mesmo que a definição
tenha sido através de colchetes */
carro["proprietário"]["endereco"]["logradouro"] = "Avenida Gigante"

console.log(carro)

delete carro.condutores
delete carro.proprietário.endereco
delete carro.calcularValorSeguro

console.log(carro)

// retornará undefined porque a propriedade acessada já não existe dentro do objeto 
console.log(carro.condutores) 

// retornará um erro, porque não é possível acessar uma propriedade de uma propriedade undefined
console.log(carro.condutores.length) 
