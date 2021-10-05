let nome 
let idade
console.log(typeof nome, typeof idade)

/* Foi impresso o valor "undefined", pois não foi definido nenhum valor
para ambas as variáveis. */

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome, typeof idade)

/* Ambas as variáveis são do tipo string */

console.log("Olá", nome,", você tem", idade,"anos.")