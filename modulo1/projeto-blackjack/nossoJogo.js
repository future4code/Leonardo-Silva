/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
console.log("Bem vindo(a) ao jogo Blackjack!")

let comeco = confirm("Bem vindo(a) ao jogo Blackjack! Deseja iniciar uma nova rodada?")

if (comeco) {
   const primeiraCarta = comprarCarta()
   const segundaCarta = comprarCarta()
   const primeiraCartaPc = comprarCarta()
   const segundaCartaPc = comprarCarta()
   const valorTotal = (primeiraCarta.valor) + (segundaCarta.valor)
   const valorTotalPc = (primeiraCartaPc.valor) + (segundaCartaPc.valor)
   
   console.log(`Suas cartas são: ${primeiraCarta.texto} e ${segundaCarta.texto}, seu total é: ${valorTotal}`)
   console.log(`As cartas do Computador são: ${primeiraCartaPc.texto} e ${segundaCartaPc.texto}, o total é: ${valorTotalPc}`)

   if (valorTotal > valorTotalPc){
      console.log("Parabéns! Você ganhou!")
   } else if (valorTotalPc > valorTotal){
      console.log("Que pena! Você perdeu!")
   } else {
      console.log("Uau, vocês empataram!")
   }

} else {
   console.log("Fim de jogo!")
}
*/