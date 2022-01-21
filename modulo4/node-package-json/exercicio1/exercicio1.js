// usamos o comando process.argv

const nome = process.argv[2]
const idade = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

const idadeFutura = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}`)