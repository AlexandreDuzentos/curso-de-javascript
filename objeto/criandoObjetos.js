// usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em js
console.log(typeof Object, typeof new Object,typeof new Object())

const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
       return preco - (preco * desc / 100)
    }
}

let p1 = new Produto("HP ELITEBOOK",250000, 10)
let p2 = new Produto("ASUS",125000,20)

let precoComDesconto1 = p1.getPrecoComDesconto()
let precoComDesconto2 = p2.getPrecoComDesconto()

console.log(precoComDesconto1)
console.log(precoComDesconto2)

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
   return {
       nome,
       salarioBase,
       faltas,
       getSalario(){
          return (salarioBase / 30) * (30 - faltas)
       }
   }
} 

let f1 = criarFuncionario("Alexandre", 15000000, 5)
let f2 = criarFuncionario("Duzentos", 12000000, 2)

console.log(f1.getSalario(), f2.getSalario())

const filha = Object.create(null)
filha.nome = "Alexandra"

console.log(filha)

// Uma função famosa que retorna objecto
const fromJson = JSON.parse('{"info": "Sou um json"}') // A função JSON.parse recebe como argumento um json e converte para objecto
console.log(fromJson.info)

/**
 * Escopos no browser : global, de função, de bloco
 */