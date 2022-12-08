const funcs = []

for(let i = 0 ; i < 10 ; i++){
    funcs.push(function(){
        console.log(i)
    })
}

/*O RESULTADO DESSE EXEMPO */
console.log(funcs[2]())
console.log(funcs[8]())
console.log(funcs[9]())