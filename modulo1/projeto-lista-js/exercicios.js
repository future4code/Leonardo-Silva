// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let alt = Number(prompt("Digite a altura do retângulo"))
  let lar = Number(prompt("Digite a largura do retângulo"))
  let resultado = alt * lar
  console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoNascimento = Number(prompt("Digite seu ano de nascimento"))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 let imc = peso / (altura * altura)
 return imc
}
let seuPeso = Number(prompt("Digite o seu peso"))
let suaAltura = Number(prompt("Digite a sua altura"))
calculaIMC(seuPeso, suaAltura)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let primeiraCor = prompt("Digite a primeira cor")
  let segundaCor = prompt("Digite a segunda cor")
  let terceiraCor = prompt("Digite a terceira cor")
  const aquarela = [primeiraCor, segundaCor, terceiraCor]
  console.log(aquarela)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let novastring = string.toUpperCase()
  return novastring
}
let frase = prompt("Digite uma frase")
retornaStringEmMaiuscula(frase)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let resultado = custo / valorIngresso
  return resultado
}
let custoTeatro = Number(prompt("Digite o custo de um espetáculo de teatro"))
let valorDoIngresso = Number(prompt("Digite o valor de um ingresso"))
calculaIngressosEspetaculo(custoTeatro, valorDoIngresso)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let resultado = string1.length === string2.length
return resultado
}
let frase1 = prompt("Digite a primeira frase")
let frase2 = prompt("Digite a segunda frase")
checaStringsMesmoTamanho(frase1, frase2)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let primeiroItem = array[0]
  return primeiroItem
}
let novoArray = [1, 2, 3]
retornaPrimeiroElemento(novoArray)

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoItem = array[array.length - 1]
  return ultimoItem
}
let ultimoArray = [1, 2, 3]
retornaUltimoElemento(ultimoArray)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let primeiro = array[0]
let ultimo = array[array.length - 1]
array[0] = ultimo
array[array.length - 1] = primeiro

let novoArray = array

return novoArray
}
let troca = [1, 2, 3]
trocaPrimeiroEUltimo(troca)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 let novaString1 = string1.toLowerCase()
 let novaString2 = string2.toLowerCase()
 return novaString1 === novaString2
}
let frase3 = prompt("Digite a primeira frase")
let frase4 = prompt("Digite a segunda frase")
checaIgualdadeDesconsiderandoCase(frase3, frase4)

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoNascimento = Number(prompt("Digite seu ano de nascimento"))
  let anoCarteira = Number(prompt("Digite o ano em que sua carteira de identidade foi emitida"))
  let idadePessoa = anoAtual - anoNascimento
  let diferencaAno = anoAtual - anoCarteira


  if (idadePessoa <= 20) {
     if (anoAtual >= anoCarteira + 5){
       console.log(true)
      } else {console.log(false)}

  } else if (idadePessoa <= 50){
      if (anoAtual >= anoCarteira + 10){
        console.log(true)
      } else {console.log(false)}

  } else {
    if (anoAtual >= anoCarteira + 15){
      console.log(true)
    } else {console.log(false)}

  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  if (ano % 400 === 0) {
    return true
 } else{ 
     if (ano % 4 === 0 ){
        if (ano % 100 === 0){
          if (ano % 400 === 0){
            return true
          } else {return false}
        } else {return true}
     } else{return false}
 }
}
let anoAtual14 = Number(prompt("Digite o ano atual"))
checaAnoBissexto(anoAtual14)

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  if (idade === "sim"){
     idade = true
  }else{idade = false}
  if (ensinoMedio === "sim"){
    ensinoMedio = true
 }else{ensinoMedio = false}
 if (disponibilidade === "sim"){
  disponibilidade = true
}else{disponibilidade = false}

  if (idade === true && ensinoMedio === true && disponibilidade === true){
    console.log(true)
  } else {console.log(false)}

}