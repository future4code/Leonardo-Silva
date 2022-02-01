const cpf:string = process.argv[2]
const separandoCpf:Array<string> = cpf.split('')
let cpfNumber:Array<number> = []
let indice:number = 0
let multiplicador:number = 10
let penultimoDigito:number = 0
let ultimoDigito:number = 0
let validoOuNao:boolean

for(let item of separandoCpf){
    if(item === "."){
        separandoCpf.splice(indice, 1)  
    } else if(item === "-"){
        separandoCpf.splice(indice, 1)  
    }
    indice = indice + 1
    if(indice === 11){
        indice = 0
    }
}

for(let item of separandoCpf){
    cpfNumber.push(Number(item))
}

for(let i = 10; i > 1; i = i-1){
    penultimoDigito = penultimoDigito + (i * cpfNumber[indice])
    indice = indice + 1
    if(i === 2){
        indice = 0
    }
}

penultimoDigito = penultimoDigito % 11

penultimoDigito = 11 - penultimoDigito

if(penultimoDigito >= 10){
    penultimoDigito = 0
}

for(let i = 11; i > 1; i = i-1){
    ultimoDigito = ultimoDigito + (i * cpfNumber[indice])
    indice = indice + 1
}

ultimoDigito = ultimoDigito % 11

ultimoDigito = 11 - ultimoDigito

if(ultimoDigito >= 10){
    ultimoDigito = 0
}

if(penultimoDigito === cpfNumber[9]){
    if(ultimoDigito === cpfNumber[10]){
        validoOuNao = true
    } else{
        validoOuNao = false
    }
} else {
    validoOuNao = false
}

console.log("O CPF é valido? -> ", validoOuNao)


