// closure : é o espaço criado, quando uma função é declarada
//Esse escopo, permite a função acessar e manipular variáveis externas a(creaseado) a função.
//Uma função tem consciência(memória) do local onde ela foi declarada ou seja de suas origens.
/* A função tem consciência do local onde ela foi declarada, logo o valor a ser imprimido será aquele
 mais próximo ao local em que ela foi declarada */

const valor = "Global"

function fora(){
    const valor = "local"
    function dentro(){
        console.log(valor)
    }

    return dentro
}

let minhaFuncao = fora()
minhaFuncao()