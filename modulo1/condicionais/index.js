/* ------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------------------

1) 
a) ele verifica se o número que o usuário digitou é divisivel por 2, ou seja, um número par.
b) números pares
c) números impares

2)
a) O código verifica qual fruta foi escolhida, e retorna seu respectivo preço.
b) "O preço da fruta Maçã é R$ 2.25"
c) "O preço da fruta  Perâ  é  R$  5", o valor da perâ definido como 5.5 seria definido novamente
    como 5, pois o break para o case seria o último break.

3)
a) a primeira linha está guardando o número digitado pelo usuário na variavel numero.
b) se o numero fosse 10: "Esse número passou no teste" seguido de "Essa mensagem é secreta!!!"
   se o numero fosse -10 daria uma mensagem de erro, pois a variavel mensagem não foi definida.
c) haveria se o numero digitado for menor do que 0, pois não foi definido um parametro para esse tipo
   de ocorrência e a variavel mensagem só é definida se o numero digitado for maior que 10. Uma maneira
   de corrigir isso seria escrever o console.log com a variavel mensagem dentro da condicional, ou 
   criar um "else" para o caso do numero digitado não for maior do que 0.

 ------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -------------------

1)
    let idade = Number(prompt("Qual a sua idade?"))

   if (idade >= 18){
       console.log("Você pode dirigir!")
   } else{
       console.log("Você não pode dirigir!")
   }

2)
   let turno = prompt("Qual o turno que você estuda? Responda com M, V ou N. M: Matutino/ V: Vespertino/ N: Noturno").toUpperCase()

   if (turno === "M"){
       console.log("Bom dia!")
   } else if (turno === "V"){
       console.log("Boa tarde!")
   } else{
       console.log("Boa noite!")
   }

3)
   let turno = prompt("Qual o turno que você estuda? Responda com M, V ou N. M: Matutino/ V: Vespertino/ N: Noturno").toUpperCase()

   switch (turno){
       case "M":
           console.log("Bom dia!")
           break
       case "V":
           console.log("Bom tarde!")
        break
       case "N":
           console.log("Bom noite!")
           break
       default:
           console.log("Comando inválido, digite novamente.")
           break
   }

4)
let genero = prompt("Qual o gênero do filme?").toLowerCase()
let preco = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && preco < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

 ------------------- DESAFIOS -------------------

1)
let genero = prompt("Qual o gênero do filme?").toLowerCase()
let preco = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && preco < 15){
    let lanchinho = prompt("Qual lanchinho deseja comprar?")
    console.log(`Bom filme! Aproveite o seu ${lanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}

2)
const nome = prompt("Digite o seu nome completo")
const tipo = prompt("Digite o tipo de jogo. IN / DO (internacionais ou domésticos).").toUpperCase()
const etapa = prompt("Digite qual a etapa do jogo. SF / DT / FI (Semi-final, Decisão de terceiro lugar ou Final).").toUpperCase()
const categoria = Number(prompt("Digite a categoria. 1 / 2 / 3 / 4"))
const ingresso = Number(prompt("Digite a quantidade de ingressos que deseja comprar."))
let multiplicador
let valorIngresso
let nTipo
let nEtapa

if (tipo === "IN") {
    multiplicador = 4.1
} else if (tipo === "DO"){
    multiplicador = 1
} else {
   console.log("Tipo de jogo não definido")
}


if (etapa === "SF") {
    if(categoria === 1){     
             valorIngresso = 1320
    } else if (categoria === 2){
             valorIngresso = 880
    } else if (categoria === 3){ 
             valorIngresso = 550
    } else if (categoria === 4){      
             valorIngresso = 220
    } else{      
            console.log("Categoria não definida.")       
    }



} else if (etapa === "DT"){
    if(categoria === 1){    
         valorIngresso = 660
    } else if (categoria === 2){
         valorIngresso = 440
    } else if (categoria === 3){ 
         valorIngresso = 330
    } else if (categoria === 4){      
         valorIngresso = 140
    } else{      
        console.log("Categoria não definida.")       
    }



} else if (etapa === "FI"){
    if(categoria === 1){  
         valorIngresso = 1980
    } else if (categoria === 2){
         valorIngresso = 1320
    } else if (categoria === 3){ 
         valorIngresso = 880
    } else if (categoria === 4){      
         valorIngresso = 330
    } else{      
        console.log("Categoria não definida.")       
    }
     
} else{
    console.log("Etapa do jogo não definido.")
}

if(tipo === "IN"){
    nTipo = "Internacional"
}
if(tipo === "DO"){
    nTipo = "Doméstico"
}

if(etapa === "SF"){
    nEtapa = "Semi-Final"
}
if(etapa === "DT"){
    nEtapa = "Decisão de terceiro lugar"
}
if(etapa === "FI"){
    nEtapa = "Final"
}


console.log(`---Dados da compra--- \n
Nome do cliente: ${nome} 
Tipo do jogo: ${nTipo} 
Etapa do jogo: ${nEtapa}
Categoria: ${categoria}
Quantidade de ingressos: ${ingresso} ingresso(s) \n
---Valores--- \nLeonar
Valor do ingresso:`, valorIngresso * multiplicador,`
Valor total:`, (valorIngresso * ingresso) * multiplicador) 
*/

