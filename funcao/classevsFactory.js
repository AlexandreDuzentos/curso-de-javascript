class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`O meu nome é ${this.nome}`)
    }
}

let person = new Pessoa("Martins")
person.falar()

let CriarPessoa1 = (nome) => {
    return {
       falar: ()  => {
           console.log(`O meu nome é ${nome}`)
       }
}
}

let pessoa1 = CriarPessoa1("Almeida")
pessoa1.falar()

let CriarPessoa2 = (nome) => {
    return {
       falar(){
           console.log(`O meu nome é ${nome}`)
       }
}
}

CriarPessoa2("Mateus").falar()
