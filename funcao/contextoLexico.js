const valor = "Gbobal"

function minhaFuncao(){
    //const valor = "local"
    console.log(valor)
}

/* A função tem consciência do local onde ela foi declarada, logo o valor a ser imprimido será aquele
 mais próximo ao local em que ela foi declarada */
function exec(){
    const global = "local"
    minhaFuncao()
}

exec()