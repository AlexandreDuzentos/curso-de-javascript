const escola = "Cod3r";

console.log(escola.charAt(4)) // Retorna o valor em uma posição
console.log(escola.charAt(5));
console.log(escola.charCodeAt(4)); // Retorna o valor correspondente do caractér r na tabela unicode.

console.log(escola.indexOf("o")) // Retorna a posição de um valor

console.log(escola.substring(1)) // Faz um recorte na string
console.log(escola.substring(2,4))

console.log("Escola " .concat(escola).concat("!"))
console.log("Escola " + escola + "!")

console.log(escola.replace("r","K"))

console.log("Ana,Alexandre,Mateus".split(','))