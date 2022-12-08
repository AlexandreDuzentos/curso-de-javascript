

// As duas sentenças dentro do if serão executadas,mas apenas a primeira está associada ao if.
function teste1(n){
    if(n > 7)
     // única sentença assoiada ao if, pois o if não foi delimitado com chaves
      console.log(n)

      // sentenca não associada ao if, pois o if sem a delimitação com as chaves considera uma única sentença
      console.log("final")
}

teste1(9)
teste1(8)


/*
 O if dentro da função não está associado a uma nenhuma sentença de código, porque logo após a condição
não se segue nenhum sentença de código o if é finalizado com o ponto e vírgula, e o que temos a seguir
é um bloco de código.
*/
function teste2(num){
    if(num > 7); {
        console.log("Não associado ao if"+num)
    }
    
}

teste2(9)
