function aumentoSalarial(planoDeTrabalho, salarioAtual){
    let salarioNovo = ""
   switch(planoDeTrabalho){
         case "A":
         case "a":
              salarioNovo = salarioAtual + (10/100) * salarioAtual 
              break
         case "B":
         case "b":
              salarioNovo = salarioAtual + (15/100) * salarioAtual 
              break
         case "C":
         case "c":
              salarioNovo = salarioAtual + (20/100) * salarioAtual 
              break
        default:
             salarioNovo = "Plano inválido"
   }

   return salarioNovo
}

console.log(aumentoSalarial("A",2000))
console.log(aumentoSalarial("B",2000))
console.log(aumentoSalarial("C",2000))