function getInteiroAleatorioEntre(min, max){
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor)
}

//console.log(getInteiroAleatorioEntre(1,5))

let opcao = 0

while(opcao != 5){
    opcao = getInteiroAleatorioEntre(1,6)
    console.log("Valor da vez: "+opcao)
}