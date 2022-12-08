const pessoa = {
    saudacao : "Bom dia",
    falar(){
        return this.saudacao
    }
}

// A função bind fez com que a função apontasse para o objecto pessoa
console.log(pessoa.falar()) // AQUI A FUNÇÃO APONTA PARA O OBJECTO PESSOA
let falar = pessoa.falar.bind(pessoa) //AQUI A FUNÇÃO NÃO APONTAVA PARA O OBJECTO PESSOA
console.log(falar())

let falar2 = pessoa.falar()
console.log(falar2)

let falar3 = pessoa.falar
console.log(falar3())