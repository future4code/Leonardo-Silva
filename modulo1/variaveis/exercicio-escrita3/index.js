let a = 10
let b = 25
let c = a

a = b
b = c

console.log("O novo valor de a é:", a)
console.log("O novo valor de b é:", b)

/* 
Como definimos a variável "c" como tendo o mesmo valor que a váriavel "a",
podemos trocar o valor de "a" sem perder o seu valor inicial que fica
salvo em "c" e que depois é atribuída à variável "b".
*/