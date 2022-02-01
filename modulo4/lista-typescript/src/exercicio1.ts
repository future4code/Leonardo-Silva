const nome:string = process.argv[2]
const data:string = process.argv[3]

const novaData:Array<string> = data.split('/')

console.log(`Olá me chamo ${nome}, nasci no dia ${novaData[0]} do mês ${novaData[1]}, do ano de ${novaData[2]}`)