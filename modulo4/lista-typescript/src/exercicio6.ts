
type cliente = {
    cliente:string,
    saldoTotal:number,
    debitos:Array<number>
}


const arrayClientes: Array<cliente> = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function descontandoDebito (array: Array<cliente>) {
    for(let pessoa of array){
        if(pessoa.debitos.length>1){
            let debito:number = Number(pessoa.debitos.reduce((previousValue:number, currentValue:number) => previousValue + currentValue))
            pessoa.saldoTotal = pessoa.saldoTotal - debito
            pessoa.debitos = []
        } else if(pessoa.debitos.length === 1){
           pessoa.saldoTotal = pessoa.saldoTotal - pessoa.debitos[0]
           pessoa.debitos = []
        }
    }
    const pessoaNegativa: Array<cliente> = array.filter((pessoa) => pessoa.saldoTotal < 0)
    console.log(pessoaNegativa)
}

descontandoDebito(arrayClientes)