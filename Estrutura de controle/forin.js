let notas = [6.7, 7.4,9.8,8.1,7.7]

for (let nota in notas){
    console.log(nota  +" : "+ notas[nota])
}

const pessoa = {
    nome : "Alexandre",
    idade : 18,
    cor_da_pele : "negra",
    apelido : "negro black",
    sobrenome : "Duzentos",
}

for(let attr in pessoa){
    console.log(pessoa[attr])
}