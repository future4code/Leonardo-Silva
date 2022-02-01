enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const nomeFilme:string = "Titanic"
const anoLancamento:number = 1997
let generoFilme:GENERO = GENERO.ROMANCE
let pontuacao:number = 87


function filmeInfo (nomeFilme:string, anoLancamento:number, generoFilme:GENERO, pontuacao?:number):any {
    type info = {
        name: string,
        year: number,
        gender: GENERO,
        pontuacao?: number
    }

    if(pontuacao){
        const filme: info = {
            name: nomeFilme,
            year: anoLancamento,
            gender: generoFilme,
            pontuacao: pontuacao
        }
        console.log(filme)
    } else {
        const filme: info = {
            name: nomeFilme,
            year: anoLancamento,
            gender: generoFilme
        }
        console.log(filme)
    }  
}

filmeInfo(nomeFilme,anoLancamento,generoFilme,pontuacao)


