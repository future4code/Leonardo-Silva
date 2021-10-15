/* ----------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -----------------

1) O código está com uma estrutura de repetição que irá se repetir 5 vezes, e a
   cada repetição, será somado o número da repetição à variável "valor, somando
   respectivamente 0, 1, 2, 3 e 4, dando um resultado final de 10.

2) 
a) Será impresso no console somente os números maiores que 18 que estão dentro 
   do array.
b) 

3) O resultado impresso seria:
   *
   **
   ***
   ****
   pois a estrutura "for" se encontra dentro do "while", e a estrutura vai sendo
   cada vez maior a cada repetição, adicionando mais asteriscos à variável "linha"
 
 ----------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -----------------

1)
let quantidade = Number(prompt("Quantos bichinhos de estimação você tem?"))
let array = []
let crescer = 1

if(quantidade > 0){
    for (let number = 0; number < quantidade; number++){
        array[number] = prompt(`Qual o nome do bichinho ${crescer}?`)
        crescer += 1
    }
console.log(array)
} else {console.log("Que pena! Você pode adotar um pet!")}

2)
a)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let crescer = 0
for (let number of array){
    console.log(array[crescer])
    crescer += 1
}

b)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let crescer = 0
for (let number of array){
    console.log((array[crescer]) / 10)
    crescer += 1
}

c)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray =[]
let crescer = 0
let crescer2 = 0
for (let number of array){
    if (array[crescer] % 2 === 0){
        novoArray[crescer2] = array[crescer]
        crescer2 += 1
    }
    crescer += 1
}
console.log(novoArray)

d)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray =[]
let crescer = 0
for (let number of array){
    novoArray[crescer] = `O elemento do índex ${crescer} é ${array[crescer]}`
    crescer += 1
}
console.log(novoArray)

e)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = array[0]
let valorMinimo = array[0]
for (let i = 0; i < array.length; i++){
    if(array[i] > valorMaximo ){
        valorMaximo = array[i]
    }
    if(array[i] < valorMinimo){
        valorMinimo = array[i]
    }  
}
console.log(`O maior número é ${valorMaximo} e o menor valor é ${valorMinimo}`)

 ---------------------------------- DESAFIOS ----------------------------------

1)
let numeroEscolhido = Number(prompt("Jogador 1: Digite o número que você está pensando."))
console.log("Vamos jogar!")
let tentativas = 1
let novoNumero
let maiorMenor
while (novoNumero !== numeroEscolhido){
   novoNumero = Number(prompt("Jogador 2: Digite um número"))
   if(novoNumero < numeroEscolhido){
      maiorMenor = "MAIOR"
   }
   if(novoNumero > numeroEscolhido){
      maiorMenor = "MENOR"
   }
   if(novoNumero !== numeroEscolhido){
       console.log(`O número chutado foi: ${novoNumero} \n Você errou! o número escolhido pelo primeiro jogador é ${maiorMenor} `)
   } else {
       console.log(`O número chutado foi: ${novoNumero}`)
       console.log("Parabéns! Você acertou!!!!")
       console.log(`O número de tentativas foi: ${tentativas}`)
   }
   tentativas += 1
}

2)
let numeroEscolhido = Math.floor(Math.random() * 100) + 1
console.log("Vamos jogar!")
let tentativas = 1
let novoNumero
let maiorMenor
while (novoNumero !== numeroEscolhido){
   novoNumero = Number(prompt("Digite um número de 1 a 100"))
   if(novoNumero < numeroEscolhido){
      maiorMenor = "MAIOR"
   }
   if(novoNumero > numeroEscolhido){
      maiorMenor = "MENOR"
   }
   if(novoNumero !== numeroEscolhido){
       console.log(`O número chutado foi: ${novoNumero} \n Você errou! o número escolhido pelo seu oponente é ${maiorMenor} `)
   } else {
       console.log(`O número chutado foi: ${novoNumero}`)
       console.log("Parabéns! Você acertou!!!!")
       console.log(`O número de tentativas foi: ${tentativas}`)
   }
   tentativas += 1
}

*/

