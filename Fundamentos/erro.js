
// o throw pode lançar qualquer tipo de dado como erro, uma string,um inteiro, um boleano, um objecto, e um array.

function lancarExcecao(error){
  throw[
    {
    data_atual : new Date(),
    nome_erro : error.name,
    msg_erro : error.message,
    error_path : error.path,
    }
  ]
}

function imprimirNomeGritado(){
try {
    return obj.name.toUpperCase();
} catch(e){
    lancarExcecao(e)
} finally{
    console.log("Finalizado!")
}

}
  
const obj = {nome : "Alexandre"}
imprimirNomeGritado(obj)
