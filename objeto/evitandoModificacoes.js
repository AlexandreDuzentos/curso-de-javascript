// Object.preventExtensions - previne a adição de novas propriedades a um objeto

const produto = Object.preventExtensions({
    nome:"qualquer", preco:1.99, tag:"promoção"
})

console.log("Extensível: "+ Object.isExtensible(produto))

produto.nome = "Borracha" // não sutirá efeito no objeto
produto.descricao = "Borracha escolar branca" //não sutirá efeito no objeto
delete produto.tag

console.log(produto)

//Object.seal - previne a remoção e a adição de propriedades no objeto

const pessoa = {
    nome: 'Rebeca',
    idade: 19
}

Object.seal(pessoa)

console.log("Selado: "+Object.isSealed(pessoa))

pessoa.nome = 'Silva'
pessoa.sobrenome = "paulo" // não surtirá efeito no objeto

console.log(pessoa)

delete pessoa.nome;

console.log(pessoa)
