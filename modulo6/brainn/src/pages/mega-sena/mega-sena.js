import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackWithColor, BackWithoutColor, Main, Mega, MegaImg, Concurso, Select, Circles, RowCircle, FinalText} from './styled'
import simbol from '../../assets/simbol.png'
import useRequestData from '../../hooks/useRequestData';
import { base_url } from '../../constants/base_url'
import onChangeOption from '../../hooks/useOnChange'



const Megasena = () => {
    const lotery1 = useRequestData([], `${base_url}/loterias-concursos`)
    const concurso0 = useRequestData([], `${base_url}/concursos/2359`)
    const numbers = concurso0.numeros
    const navigate = useNavigate;
    
    const concursoNumbers = concurso0 && numbers && numbers.map((num) => {
        return (<Circles key={num}>
            <b>{num}</b>
        </Circles>)
    })

    const getDate = () => {
        if(concurso0.data){
            const date = new Date(concurso0.data)
            const newData = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            return newData
        }
    }


    useEffect(() => {
        
    }, [])

   
    
    return(
        <Main>
            <BackWithColor>
                <Select onChange={onChangeOption}>
                    <option value={"megasena"}>MEGA-SENA</option>
                    <option value={"quina"}>QUINA</option>
                    <option value={"lotofacil"}>LOTOFACIL</option>
                    <option value={"lotomania"}>LOTOMANIA</option>
                    <option value={"timemania"}>TIMEMANIA</option>
                    <option value={"diadesorte"}>DIA DE SORTE</option>
                </Select>
                <Mega>
                    <MegaImg src={simbol}/>
                    <h1>MEGA-SENA</h1>
                </Mega>
                <Concurso>
                    <label>Concurso</label>
                    {concurso0.id ? <p>{concurso0.id} - {getDate()}</p> : <></>}
                </Concurso>
                    {/* {lotery1[0] ? GetLot() : <p>loading</p>} */}
            </BackWithColor>
            <BackWithoutColor>
            {concursoNumbers ? <RowCircle>{concursoNumbers}</RowCircle> : <p>loading</p> }
            <FinalText>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</FinalText>
            </BackWithoutColor>
            
        </Main>
    )
}

export default Megasena