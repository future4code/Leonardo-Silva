import { goToMegaSena, goToLotofacil, goToQuina, goToLotomania, goToTimemania, goToDiaDeSorte } from '../routes/router';
import { useNavigate } from 'react-router-dom'

const onChangeOption = (e) => {
    const navigate = useNavigate
    switch(e.target.value){
        case "megasena":
            goToMegaSena(navigate)
            break;
        case "quina":
            goToQuina(navigate)
            break;
        case "lotofacil":
            goToLotofacil(navigate)
            break;
        case "lotomania":
            goToLotomania(navigate)
            break;
        case "timemania":
            goToTimemania(navigate)
            break;
        case "diadesorte":
            goToDiaDeSorte(navigate)
            break;
        default:
            goToMegaSena(navigate)
        break;
    }
}

export default onChangeOption