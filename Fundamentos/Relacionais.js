/*O === significa estritamente igual, de modo que compara, tanto o conteudo dos operandos, quanto o tipo de dado */
/*O === significa igual apenas, de modo que compara apenas o conteúdo dos oeprandos*/

console.log("(01)", '1' == 1)
console.log("(02)", '1' === 1)
console.log("(03)", '3' != 3)
console.log("(04)", '3' !== 3)
console.log("---------------------------------------")
console.log("(05)", 3 < 2)
console.log("(06)", 3 > 2)
console.log("(07)", 3 <= 2)
console.log("(08)", 3 >= 2)
console.log("----------------------------")
// d1 é igual a d2 quanto ao conteúdo, mas não quanto a referência
const d1 = new Date(0)
const d2 = new Date(0)
console.log("(09)", d1 == d2)
console.log("(10)", d1 === d2)
console.log("(11)", d1.getTime() === d1.getTime())

console.log("---------------------------------------")

console.log(d1)
console.log(d2)