// ESCOPO : é a área de atuação de uma variável, ou seja sua visibilidade e acessibilidade.

{
    {
        {
            {
                var Sera = "Seraaá"
                console.log(Sera)
            }
        }
    }
}

/* 
Variávei declaradas com  var não têm escopo de bloco,têm escopo global ou seja,são acessíveis de
qualquer parte do arquivo.
*/ 
console.log(Sera)

function teste(){
    var local = 123 // Variáveis declaradas com o var têm escopo de função
    console.log(local)
}

teste()

// console.log(local) 

/* window é um objecto que representa a janela do browser,todos os objectos globais,funções e variáveis
automaticamente se tornam membros do objecto window */

// Toda variável declarada com var  no escopo global é visível e acesível pelo objecto global window
