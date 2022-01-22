const dataNascimento:string = process.argv[2]
const dataEmissao:string = process.argv[3]
const dataAtual = new Date()
let renovar:boolean = false

const separandoNasc:Array<string> = dataNascimento.split('/')
const separandoEmissao:Array<string> = dataEmissao.split('/')

const arrayNasc:Array<number> = [
    Number(separandoNasc[0]), Number(separandoNasc[1]), Number(separandoNasc[2])
]

const arrayEmissao:Array<number> = [
    Number(separandoEmissao[0]), Number(separandoEmissao[1]), Number(separandoEmissao[2])
]

const arrayAtual:Array<number> = [
    dataAtual.getDate(), dataAtual.getMonth() + 1, dataAtual.getFullYear()
]

let idadeTotal:number = arrayAtual[2] - arrayNasc[2]
let carteiraTotal:number = arrayAtual[2] - arrayEmissao[2]

if(new Date(arrayAtual[2], arrayAtual[1], arrayAtual[0]) < new Date(arrayAtual[2], arrayNasc[1], arrayNasc[0])){
    idadeTotal = idadeTotal - 1
}

if(new Date(arrayAtual[2], arrayAtual[1], arrayAtual[0]) < new Date(arrayAtual[2], arrayEmissao[1], arrayEmissao[0])){
    carteiraTotal = carteiraTotal - 1
}

idadeTotal = idadeTotal < 0 ? 0 : idadeTotal
carteiraTotal = carteiraTotal < 0 ? 0 : carteiraTotal

if(idadeTotal <= 20){
    if(carteiraTotal >= 5){
        renovar = true
    } else {
        renovar = false
    }
} else if(idadeTotal > 20 && idadeTotal <= 50){
    if(carteiraTotal >= 10){
        renovar = true
    } else {
        renovar = false
    }
} else if(idadeTotal > 50){
    if(carteiraTotal >= 15){
        renovar = true
    } else {
        renovar = false
    }
}

console.log("idade da pessoa:", idadeTotal,"| ano carteira:",carteiraTotal, "| precisa renovar?", renovar)