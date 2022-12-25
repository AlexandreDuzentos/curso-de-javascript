const sequencia = {
    _valor: 1, // privada por convenção, ou seja apenas na téoria não na prática
    
    // getter no javascript
    get valor(){
        return this._valor++
    },

    // setter no javascript
    set valor(valor){
        if(valor > this.valor){
           this._valor = valor
        }
        
    },

    get idades(){
       return 15;
    }
    
}

// chamada ao método getter valor(omitimos os parênteses)
console.log(sequencia.valor,sequencia.valor) 

// chamada ao método setter valor(omitimos os parênteses)
sequencia.valor = 5

console.log(sequencia.valor)


