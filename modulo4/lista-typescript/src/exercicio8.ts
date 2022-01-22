const dataNascimento:string = (process.argv[2])
const dataEmissao:string = process.argv[3]

const separandoNasc:Array<string> = dataNascimento.split('/')

const arrayNasc:Array<number> = [
    Number(separandoNasc[0]), Number(separandoNasc[1]), Number(separandoNasc[2])
]

const dataAtual = new Date()
const arrayAtual:Array<number> = [
    dataAtual.getDate(), dataAtual.getMonth() + 1, dataAtual.getFullYear()
]

let idadeTotal:number = arrayAtual[2] - arrayNasc[2]


    // anoNasc = +anoNasc
    // mesNasc = +mesNasc
    // diaNasc = +diaNasc

    if (arrayAtual[1] <= arrayNasc[1] && arrayNasc[0] < arrayAtual[0]){
        idadeTotal = idadeTotal - 1
    }    

    idadeTotal = idadeTotal < 0 ? 0 : idadeTotal


// idade(arrayNasc[2], arrayNasc[1], arrayNasc[0], arrayAtual[2], arrayAtual[1], arrayAtual[0], idadeTotal)

console.log(idadeTotal)