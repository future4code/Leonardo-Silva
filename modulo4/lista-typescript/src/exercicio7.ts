type itens = {
    nome:string,
    quantidade:number,
    valorUnitario:number | string
}

const ajustaPreco = (preco : number | string): string => {
	const valorAjustado: string = Number(preco).toFixed(2).replace('.', ',')
	return "R$ " + valorAjustado
}


const arrayDeItens:Array<itens> = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function ordenando(a:Array<itens>, b:Array<itens>) {
     
}


function arrayOrdenado(array:Array<itens>) {
    for(let item of array){
        item.valorUnitario = ajustaPreco(item.valorUnitario)
    } 

    let novoArray:Array<itens> = array.sort(function (a:itens, b:itens) {return a.quantidade - b.quantidade})

    console.log(novoArray)
}

arrayOrdenado(arrayDeItens)