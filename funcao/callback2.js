const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

// Sem callback
let notasBaixas = []
for(let index in notas){
    if(notas[index] < 7){
        notasBaixas.push(notas[index])
    }
}

console.log(notasBaixas)

// Com callback
notasBaixas = notas.filter(function(nota){
    return  nota < 7
})

console.log(notasBaixas)


// Com callback
notasBaixas = notas.filter((nota) => {
    return nota < 7
})

console.log(notasBaixas)