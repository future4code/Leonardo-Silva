enum ROLE {
    USER = "user",
    ADMIN = "admin"
}

type usuarios = {
    name:string,
    email:string,
    role:ROLE
}


const arrayUsuarios: Array<usuarios> = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function apenasAdmins(array:Array<usuarios>) {
    const filtroEMap: Array<string> = array.filter((user) => user.role === "admin").map((user) => {
        return user.email
    })
    console.log(filtroEMap)
}

apenasAdmins(arrayUsuarios)