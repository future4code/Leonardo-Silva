let numero:number = Number(process.argv[2])
let numeroRomano:Array<string> = []
let valorRomano:string
type romanos = {
    letra:string,
    valor:number
}

const valores:Array<romanos> = [
    {letra: "M", valor: 1000},
    {letra: "CM", valor: 900},
    {letra: "D", valor: 500},
    {letra: "CD", valor: 400},
    {letra: "C", valor: 100},
    {letra: "XC", valor: 90},
    {letra: "L", valor: 50},
    {letra: "XL", valor: 40},
    {letra: "X", valor: 10},
    {letra: "IX", valor: 9},
    {letra: "V", valor: 5},
    {letra: "IV", valor: 4},
    {letra: "I", valor: 1}
]

for(let item of valores){
    if(numero < item.valor){
    } else {
        while(numero >= item.valor){
            numero = numero - item.valor
            if(numero >= 0){
                numeroRomano.push(item.letra)
            }
        } 
    }
}

valorRomano = numeroRomano.join('')

console.log("O número romano é:", valorRomano)