/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/


function EscolhaModelo(modelo){
    let msg = ""
    switch(modelo){
        case "hatch":
            msg = "Compra efetuado com sucesso"
            break
        case "sedans":
            msg = "Tem certeza que prefere este modelo?"
            break
        case "motocicletas":
            msg = "Tem certeza que prefere este modelo?"
            break
        case "camionetes":
            msg = "Tem certeza que prefere este modelo?"
            break
        default :
           msg = "Não trabalhamos com este tipo de automóvel aqui!"
    }

    return msg
}

console.log(EscolhaModelo("hatch"))
console.log(EscolhaModelo("sedans"))
console.log(EscolhaModelo("motocicletas"))
console.log(EscolhaModelo("camionetes"))
console.log(EscolhaModelo("BMW"))
