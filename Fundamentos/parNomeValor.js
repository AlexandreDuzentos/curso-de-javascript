// par nome/valor

const saudacao = "Opá"

function exec(){
    const saudacao = "Falaaaá"
    return saudacao;
}

console.log(saudacao)
console.log(exec())



{
    const n1 = 90;
    console.log("dentro: ",n1)
}

//console.log(n1) variáveis declaradas com o const têm escopo de bloco

//Objectos são grupos aninhados de pares chave|nome|identifador/valor
const cliente = {
     nome: "Alexandre",
     idade:19,
     peso:80,
     endereco: {
        pais:  "Angola",
        cidade: "Luanda",
        distrito:"Talatona",
        bairro : "Futungo kawelele",
     }
}