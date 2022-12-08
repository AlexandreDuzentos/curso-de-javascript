const  imprimirResultado = function(nota){
    if(Number.isInteger(nota)){
        if(nota >= 7 ){
            console.log("Aprovado")
        } else {
            console.log("Reprovado")
        }
    } else {
        console.log(`O parâmetro passado não é inteiro é: ${typeof nota}`)
    }
    
}

imprimirResultado(6)
imprimirResultado(7)
imprimirResultado("Epá") //CUIDADO
