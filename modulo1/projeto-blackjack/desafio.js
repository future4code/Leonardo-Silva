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

console.log("Bem vindo(a) ao jogo Blackjack!")
let novoComeco = confirm("Bem vindo(a) ao jogo Blackjack! Deseja iniciar uma nova rodada?")
    
if (novoComeco) {
   let cartas = []
   let cartasPc = []
   let continuar = true
   let primeirasCartas = true
   let resultado

   while(primeirasCartas){
      cartas.push(comprarCarta())
      cartas.push(comprarCarta())  
      cartasPc.push(comprarCarta())
      cartasPc.push(comprarCarta())

      if(cartas[0].valor && cartas[1].valor === 11 || cartasPc[0].valor && cartasPc[1].valor === 11 ){
         cartas = []
         cartasPc = []
      } else {
         primeirasCartas = false
      }
   }

   let textoFinal = ""
   let valorFinal = 0

   while(continuar){
      textoFinal = ""
      valorFinal = 0

      for (let carta of cartas){
         valorFinal = valorFinal + carta.valor
      }
      
      for (let carta of cartas){
         textoFinal = textoFinal + carta.texto + " "
      }

      if (valorFinal > 21){
         continuar = false
      } else {
         continuar = confirm(`Suas cartas são: ${textoFinal}. A carta revelada do computador é: ${cartasPc[0].texto} . Deseja continuar? `)

         if(continuar){
            cartas.push(comprarCarta())
         } else {
            continuar = false
         }
      }
   }
    
   let valorFinalPc = 0
   let textoFinalPc = ""
   let continuarPc = true

   while(continuarPc){

      for (let carta of cartasPc){
         valorFinalPc = valorFinalPc + carta.valor
      }

     for (let carta of cartasPc){
         textoFinalPc = textoFinalPc + carta.texto + " "
      }

     if(valorFinalPc < valorFinal && valorFinal <= 21){
         cartasPc.push(comprarCarta())
         valorFinalPc = 0
         textoFinalPc = ""
      }  else {
         continuarPc = false
      }
   } 
   
   if(valorFinal > valorFinalPc && valorFinal <= 21){
      resultado = "Parabéns, você ganhou!!!"
   } else if(valorFinal <= 21 && valorFinalPc > 21){
      resultado = "Parabéns, você ganhou!!!"
   } else if(valorFinalPc > valorFinal && valorFinalPc <= 21){
      resultado = "Que pena, você perdeu!"
   } else if(valorFinalPc <= 21 && valorFinal > 21){
      resultado = "Que pena, perdeu!"
   } else {
      resultado = "Vocês empataram!"
   }
   
   alert(`Suas cartas são: ${textoFinal} e seu total é: ${valorFinal} \nAs cartas do computador são: ${textoFinalPc} e o total é: ${valorFinalPc} \n${resultado}`)           
} else {
   alert("Fim de jogo!")
}
