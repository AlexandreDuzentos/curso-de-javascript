//IIFE - IMEDIATELLY INVOKED FUNCTION EXPRESSION
let n1 = 18

// Esse tipo de declaração de função é usada para fugir do escopo global
// Não é possível acessar o escopo global de dentro dessa função
// Essa função já é chamada na hora de sua declaração
(function(){
    console.log("Será executado na hora")
    console.log("Foge do escopo mais abrangente ")
})()


/*
Porque evitar o escopo global?
R:Porque se algo é compartilhado por toda a aplicação ,principalmente algo que é variável, muitos códigos
podem manipular aquela variável e isso gerar bugs inesperadso na sua aplicação
 */