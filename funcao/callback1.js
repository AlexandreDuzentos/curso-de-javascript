const fabricantes = ["Mercedes","Audi","Bmw"]

function imprimirResultado(nome, indice){
    console.log(`${indice = 1}. ${nome}`)
}

fabricantes.forEach(imprimirResultado)

console.log("------------------------------")

fabricantes.forEach(function(nome, indice){
    console.log(indice + 1, nome)
})

fabricantes.forEach((fabricante) => {
    console.log(fabricante)
})

console.log("------------------------------")

fabricantes.forEach((fabricante) =>  console.log(fabricante))
