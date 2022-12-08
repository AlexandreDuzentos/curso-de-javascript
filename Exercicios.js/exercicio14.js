/*
14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
 */

function frutaDisponivelEmEstoque(fruta){
    let msg = ""
    switch(fruta){
        case "maça":
        case "Maça":
        case "MAÇA":
            msg = "Não vendemos essa fruta aqui"
            break
        case "kiwi":
        case "Kiwi":
        case "kIWI":
            msg = "Estamos com escassez de Kiwi"
            break
        case "melancia":
        case "Melancia":
        case "MELANCIA":
            msg = "Aqui está, são 3 reais o quilo"
            break
        default:
            msg = "Erro"
    }
    return msg
}

console.log(frutaDisponivelEmEstoque("Maça"))
console.log(frutaDisponivelEmEstoque("Kiwi"))
console.log(frutaDisponivelEmEstoque("Melancia"))
console.log(frutaDisponivelEmEstoque("Banana"))