console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Bola de futebol";
obj1.nome2 = "Carrinho de compras";
obj1['viver é bom'] = "Na europa"; // Evitar usar essa notação

function Obj(nome){
    this.nome = nome // me permite acessar esse atributo da função de qualquer escopo
    this.exec = function(){ // me permite acessar esse comportamento da função de qualquer escopo
        console.log("Executando...")
    }
}

const Obj2 = new Obj("Alexandre \n");
const Obj3 = new Obj("Martins")
console.log(Obj2.nome,Obj3.nome)

Obj2.exec();
