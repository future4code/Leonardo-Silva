/* EXERCÍCIOS DE INTERPRETAÇÃO

1) a. false
   b. false
   c. true
   d. boolean

2) O problema é que a variável está salvando os números digitados como
strings, então se por exemplo forem digitados os números 2 e 3, o 
resultado mostrado seria 23 e não 5.

3) Alterar a variável soma, para ficar assim:
   
const soma = Number(primeiroNumero) + Number(segundoNumero)

*/

/* EXERCÍCIOS DE ESCRITA DE CÓDIGO

1) 
let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
let diferencaIdade = idade > idadeAmigo

console.log("Sua idade é maior do que a do seu amigo?", diferencaIdade)
console.log(idade - idadeAmigo)

2)
let numero = Number(prompt("Insira um número par"))
console.log (numero % 2)

Quando o número digitado for par, o resultado sempre será 0
e quando o número digitado for impar, o resultado sempre será 1

3) 
let idade = Number(prompt("Qual a sua idade?"))
let meses = idade * 12
let dias = meses * 30
let horas = dias * 24

console.log("meses:", meses)
console.log("dias:", dias)
console.log("horas:", horas)

4)
let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite um segundo número"))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)

*/

/* DESAFIO

1) 
a)
let grausfahrenheit = 77
let kelvin = ((grausfahrenheit - 32) * (5/9)) + 273.15
console.log("Valor de 77°F em Kelvin:", kelvin)

b)
let grauscelsius = 80
let grausfahrenheit = (grauscelsius * (9/5)) + 32
console.log("Valor de 80°C em Fahrenheit:", grausfahrenheit)

c) 
let grauscelsius = 30
let grausfahrenheit = (grauscelsius * (9/5)) + 32
let kelvin = ((grausfahrenheit - 32) * (5/9)) + 273.15
console.log("Valor em Fahrenheit:", grausfahrenheit)
console.log("Valor em Kelvin:", kelvin)

d)
let grauscelsius = Number(prompt("Digite o valor em celsius"))
let grausfahrenheit = (grauscelsius * (9/5)) + 32
let kelvin = ((grausfahrenheit - 32) * (5/9)) + 273.15
console.log("Valor em Fahrenheit:", grausfahrenheit)
console.log("Valor em Kelvin:", kelvin)

2)
a)
let quilowatt = 0.05
console.log("O valor a ser pago por 280 quilowatt-hora seria:", quilowatt * 280,"reais")

b)
let quilowatt = 280
let quilowattHora = quilowatt * 0.05
console.log("O valor a ser pago por", quilowatt,"quilowatt-hora seria:", quilowattHora,"reais")
console.log("Com o desconto de 15%:", quilowattHora - ((quilowattHora) * (15/100)),"reais")
 
*/

