// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let number = 1
    let arrayInvertido = []
    for (let i of array){
        arrayInvertido[array.length - number] = i
        number = number + 1
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordemCrescente = array.sort((primeiro, segundo) => {
        return primeiro - segundo
    })
    return ordemCrescente  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    for(let number of array){
        if(number % 2 === 0){
            numerosPares.push(number)
        }
    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []
    for(let number of array){
        if(number % 2 === 0){
            numerosPares.push(number ** 2)
        }
    }
    return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for(let number of array){
        if(number > maiorNumero){
            maiorNumero = number
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0
    let menorNumero = 0
    let divisivel

    if(num1 >= num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    let diferenca = maiorNumero - menorNumero

    if(maiorNumero % menorNumero === 0){
        divisivel = true
    } else {
        divisivel = false
    }

    let resultado = {maiorNumero: maiorNumero, maiorDivisivelPorMenor: divisivel, diferenca: diferenca}
    return resultado
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for(let i = 0; i < n; i++){
        numerosPares.push(2 * i)
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        triangulo = "Equilátero"
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        triangulo = "Escaleno"
    } else {
        triangulo = "Isósceles"
    }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordenado = array.sort((primeiro, segundo) => {
        return primeiro - segundo
    })
    let novoArray = [ordenado[ordenado.length - 2], ordenado[1]]
    return novoArray 
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let novosAtores = filme.atores
    for(let i = 1; i < novosAtores.length; i++){
        novosAtores[i] = " " + novosAtores[i]
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${novosAtores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novoObjeto = pessoa
    novoObjeto.nome = "ANÔNIMO"
    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}