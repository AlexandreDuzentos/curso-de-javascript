// Cadeia de protótipos(prototype chain)
Object.prototype.attr0 = "k" // Abordagem não recomendada
const avo = {attr1 : "A"}
const pai = {__proto__: avo, attr2 : "B", attr3 : "e"}
const filho = {__proto__: pai, attr3 : "C"}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

console.log("----------------------------------------------")

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}


const ferrari = {
  modelo: 'F40',
  velMax: 324 // Shadowing(sombreamento)
}


const volvo = {
  modelo: 'V40',
  status(){
     return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari, volvo)

console.log("-----------------------------------")

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(80)
console.log(ferrari.status());

