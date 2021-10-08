/* -------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------------

1)
a) 10 50

b) A função iria rodar, porém sem o console.log não seria impresso nada.

2) 
a) A função serve para verificar se há escrito a palavra "cenoura" na
frase digitada, não importando se ela for escrita com letras maiúsculas.

b) i. true
   ii. true
   iii. true
*/

/* -------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------

1)
a)
function leonardo(){

console.log("Eu sou Leonardo, tenho 24 anos, moro em Guaratinguetá e sou estudante.")
   
}
leonardo()

b)
function leonardo(nome, idade, cidade, profissao){

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
       
}
leonardo("Leonardo", 24, "Guaratinguetá", "estudante")

2) ----------------------------------------------------------------
a)
function soma(numeroUm, numeroDois){
let somando = numeroUm + numeroDois
return somando
}
console.log(soma(4,5))

b)
function soma(numeroUm, numeroDois){
    let maiorOuIgual = numeroUm >= numeroDois
    return maiorOuIgual
}
console.log(soma(4,5))

c) 
function par(numero){
    let parOuNao = numero % 2 === 0
    return parOuNao
}
console.log(par(5))

d)
function frase(mensagem){
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
}
frase("Meu nome é Leonardo")

3) ----------------------------------------------------------------
function soma(numeroUm, numeroDois){
   let somando = numeroUm + numeroDois
   return somando
}
function subtracao(numeroUm, numeroDois){
   let subtraindo = numeroUm - numeroDois
   return subtraindo
}
function multiplicacao(numeroUm, numeroDois){
    let multiplicando = numeroUm * numeroDois
    return multiplicando
}
function divisao(numeroUm, numeroDois){
    let dividindo = numeroUm / numeroDois
    return dividindo
}

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))

console.log("Soma:", soma(primeiroNumero, segundoNumero))
console.log("Diferença:", subtracao(primeiroNumero, segundoNumero))
console.log("Multiplicação:", multiplicacao(primeiroNumero, segundoNumero))
console.log("Divisão:", divisao(primeiroNumero, segundoNumero))

*/

