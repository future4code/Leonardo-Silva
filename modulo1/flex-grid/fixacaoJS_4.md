```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let total = 0
    for(let number = 0; number < arrayDeNumeros.length; number++){
        if(arrayDeNumeros[number] === numeroEscolhido){
            total += 1
        }
    }

    if(total === 0){
        return "Número não encontrado"
    } else {
        return `O número ${numeroEscolhido} aparece ${total}x`
    }
}```
