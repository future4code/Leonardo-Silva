```function calculaPrecoTotal(quantidade) {
  let resultado
  if(quantidade < 12){
    resultado = quantidade * 1.30
  } else{
    resultado = quantidade * 1
  }
  return resultado
}```