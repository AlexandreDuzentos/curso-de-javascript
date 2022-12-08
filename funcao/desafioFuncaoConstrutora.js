// Em algumas ocasiões é mais favorável usar função factory ao invés de uma função construtora ou classe.

function criarPessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`O meu nome é ${this.nome}`)
    }
}

let pessoa = new criarPessoa("Francisco")
pessoa.falar()