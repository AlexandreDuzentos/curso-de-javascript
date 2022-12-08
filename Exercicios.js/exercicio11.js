/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
 */


/* O ano ser divísível por 4 é uma condição necessária, mas não suficiente para ser bissexto, porém para
este século, podemos considerar suficiente até o ano de 2098, ou sejá não é necessário verificar as 
outras condições. Ou seja, até 2096, para sabermos se um ano é bissexto ou não basta verificarmos se o
ano é ou não divisível por 4. */

function achaBissexto(ano){
   if(ano % 4 == 0){
     console.log(`O Ano ${ano} é bissexto`)
   } else {
    console.log(`O Ano ${ano} não é bissexto`)
   }
}

achaBissexto(2020)