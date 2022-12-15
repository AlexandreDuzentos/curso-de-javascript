/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function mediaPonderadaAluno(n1,n2,n3, codigoAluno)
{
    let mediaPonderada = 0
    let pesoMaiorNota =  4
    let pesoNotasRestantes = 3 
    let status = ""

    if(n1 != n2 && n1 != n3){
        if(n1 > n2 && n1 > n3){
            mediaPonderada = (n1 * pesoMaiorNota + n2 * pesoNotasRestantes + n3 * pesoNotasRestantes) / n1 + n2 + n3
        } else if(n2 > n1 & n2 > n3){
            mediaPonderada = (n2 * pesoMaiorNota + n1 * pesoNotasRestantes + n3 * pesoNotasRestantes) / n1 + n2 + n3
        } else {
            mediaPonderada = (n3 * pesoMaiorNota + n2 * pesoNotasRestantes + n1 * pesoNotasRestantes) / n1 + n2 + n3
        }
    } else {
        mediaPonderada = (n1 * pesoMaiorNota + n2 * pesoNotasRestantes + n3 * pesoNotasRestantes) / n1 + n2 + n3
    }

    if(mediaPonderada >= 5){
       status = "Aprovado"
    } else{
        status = "Reprovado"
    }


    return `"Codigo aluno : ${codigoAluno}, n1 : ${n1}, n2 : ${n2}, n3 : ${n3}, Média : ${mediaPonderada}, ${status}`
     
}

console.log(mediaPonderadaAluno(1,1,1,"10399"))