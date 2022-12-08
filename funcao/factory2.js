function criarProduto(nome,preco){
    return {
        nome : nome,
        preco : preco,
        desconto : 12
    }
}

console.log(criarProduto("HP ELITEBOOK G1",250.000))
console.log(criarProduto("mouse",7.500))

function criarProduto2(nome,preco){
    return {
        nome,
        preco,
        desconto: 15
    }
}

console.log(criarProduto2("TV",380.000))