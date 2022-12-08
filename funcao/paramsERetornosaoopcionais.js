function area(largura,altura){
    let area = largura * altura
    if(area > 20){
        console.log(`Valor da área acima do permitido ${area}`)
    } else {
        return area
    }
}

console.log(area(3,3))
console.log(area(2,10))
console.log(area(5,5))
console.log(area(4))
console.log(area(3,2,4,5,6,8))

