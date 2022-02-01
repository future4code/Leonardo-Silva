const palavra: string = process.argv[2]
const separandoPalavra:Array<string> = palavra.split('')
let tamanhoArray:number = separandoPalavra.length
let valorTotal:number = 1

while(tamanhoArray !== 1){
    valorTotal = valorTotal * tamanhoArray
    tamanhoArray = tamanhoArray - 1
}

console.log("O número total de anagramas da palavra é: ",valorTotal)