const obj = {a: 5, b: 7, c: 9, soma(){return this.a + this.b + this.c}}

// a função stringify do objeto JSON converte um objeto para json
console.log(JSON.stringify(obj))

// Testando o tipo do dado de JSON
console.log(typeof JSON) // OBJETO

// a função parse do objeto JSON converte um json para objeto
//console.log(JSON.parse("{a:5,b:7,c:9}")) // formato json inválido
console.log(JSON.parse('{"a":5,"b":7,"c":9}')) // formato json válido

/**
 * valores suportados pelo JSON: inteiro, string, boolean, objeto, array, caractere
 */
console.log(JSON.parse('{"a":1, "b":"string","c":true, "endereco": {"rua":19, "logradouro":"arroz"}, "e": [], "f":"e"}'))