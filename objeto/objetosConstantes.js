/*
Pessoa -> 123 -> {...}
O objeto aponta para um endereço de memória(123) e o endereço de memória aponta para o objeto{...}
Eu não posso alterar a referência do objeto na memória, mas posso alterar os atributos e métodos do objeto
*/

/*A referência da variável não pode ser mudada, mas o objeto pode

A variável que aponta para o objeto é constante, mas o objeto em si não é constante
*/

const pessoa = { nome : "Alexandre"}
pessoa.nome = "Pedro"

// pessoa -> 456 -> {...}
//pessoa = {nome : "mateus"}

// A função Object.freeze faz com que o objeto deixe de ser modificável
Object.freeze(pessoa) // Previne a modificação, deleção e adicão de atributos no objeto

delete pessoa.nome // Não surtirá efeito no objeto, pois ele foi congelado
pessoa.idade = 19 // Não surtirá efeito no objeto, pois ele foi congelado
pessoa.nome = "Mateus" // Não surtirá efeito no objeto, pois ele foi congelado
console.log(pessoa.nome)



const pessoaConstante = Object.freeze({email : "Aduzentos12@gmail.com"}) // previne a modificação de atributos e a adição de novos atributos
console.log(pessoaConstante)
console.log(pessoaConstante.email)

pessoaConstante.email = "AkenyMorais15@gmail.com"

console.log(pessoaConstante.email)
