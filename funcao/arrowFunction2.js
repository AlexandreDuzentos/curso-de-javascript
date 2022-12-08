/* o this dentro do contexto de uma arrow function, não varia,
é o mesmo this do contexto mais abrangente em relação ao contexto em que o this se encontra */


function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++ 
        console.log(this.idade)
    },5000)  
}

new Pessoa






