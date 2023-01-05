/**
 * A diferença entre uma classe é uma função em javascript é simplesmente a síntaxe, internamente eles
 * funcionam da mesma forma
 */

class Lancamento
{
    constructor(nome = "Genérico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro
{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
 
}

const salario = new Lancamento("salário", 45000)
const contaLuz = new Lancamento("Conta da luz", -220)

let contas = new CicloFinanceiro(1, 2023)
contas.addLancamentos(salario, contaLuz)

console.log(contas.sumario())