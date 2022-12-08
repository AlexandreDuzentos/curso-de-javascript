function soBoaNoticia(nota){
    if(nota >= 7.0){
        console.log("Aluno aprovado com "+nota)
    }
}

soBoaNoticia(6)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("o valor "+valor+ " é verdadeiro")
    }
}

seForVerdadeEuFalo(0) // falso
seForVerdadeEuFalo(1) // verdadeiro
seForVerdadeEuFalo(null) // falso
seForVerdadeEuFalo(undefined) // falso
seForVerdadeEuFalo(NaN) //falso
seForVerdadeEuFalo("") // falso
seForVerdadeEuFalo(" ") // verdadeiro
seForVerdadeEuFalo("?") // verdadeiro
seForVerdadeEuFalo(Infinity) // verdadeiro
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})