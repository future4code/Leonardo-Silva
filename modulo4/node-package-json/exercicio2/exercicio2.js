const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])

switch(operacao){
    case 'soma':
        console.log(valor1 + valor2)
        break
    case 'subtracao':
        console.log(valor1 - valor2)
        break
    case 'divisao':
        console.log(valor1 / valor2)
        break
    case 'multiplicacao':
        console.log(valor1 * valor2)
        break
}