const nome = "Alexandre"
let concatenacao = "Olá " +
   nome 
   + "!"

   // Templates strings consideram quebra de linha e espaço
const template = `
   Olá
   ${nome}`

   console.log(concatenacao,template)

   // expressoes

   console.log(`1 + 1", ${1 + 1}`)

   const up = texto => texto.toUpperCase();

   console.log(`Eiii! ${up("cuidado")}`)