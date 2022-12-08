
// É possível chamar outras funções, a partir de ua função
function oqueEOThis(){
    console.log(this);
}

oqueEOThis()

function f1(){
    this.idade = 19
    return this
}

console.log(`Acesso a atributo através da chamada da função, retornando o objecto: ${f1().idade}`)

function f2(){
    this.idade = 19
}

let fAttr = new f2()
console.log(`Acesso a atributo atráves a instância da função, sem retornar o objecto ${fAttr.idade}`)

function thisDentroDoSetInterval(){
    this.idade = 19
    console.log(this) // Aqui o this é O próprio objecto(thisDentroDoSetInterval)

    setInterval(function(){
        console.log(this) // Aqui o this é o objecto timeout
    },1000)
}

new thisDentroDoSetInterval()


/*FORMA 1 : FAZENDO O THI DA FUNÇÃO setInterval APONTAR PARA OUTRO OBJECTO*/

/*Não posso chamar nenhuma função a partir do retorno da funçao setInterval, pois ela não retorna o seu
 próprio objecto, logo a funçao bind(this) não estará definida se eu a chamar */  
function apontarThisParaObjectoEspecifico(){
    this.idade = 19

    setInterval(function(){
        console.log("Apontando para objecto escolhido 1")
        console.log(this)

    }.bind(this),1000)
}

new apontarThisParaObjectoEspecifico()

/*FORMA 2 : FAZENDO O THIS DA FUNÇÃO setInterval APONTAR PARA OUTRO OBJECTO*/

function apontarThisParaObjectoEspecifico2(){
    this.idade = 19
    const self = this

    setInterval(function(){
        console.log("Apontando para objecto escolhido 2")
        console.log(self)

    },1000)
}

new apontarThisParaObjectoEspecifico2()


