const funcs = []

for(var i = 0 ; i < 10 ; i++){
    funcs.push(function(){
        console.log(i)
    })
}

/*O RESULTADO DESSE EXEMPLO É UMA DAS ESTRANHEZAS DO JS,EM OUTRAS LINGUAGENS O RESULTADO SERIA DIFERENTE */
//console.log(funcs[2])
console.log(funcs[2]())
console.log(funcs[8]())
console.log(funcs[9]())