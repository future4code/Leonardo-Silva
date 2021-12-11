import React from 'react';
import * as C from '../pages/styles'

const ViagemCard = (props) => {

    return (
        <C.ViagemCardMain>
            <C.ViagemCardInfo><p><b>Viagem:</b></p>{props.trip.name}</C.ViagemCardInfo>
            <C.ViagemCardInfo><p><b>Planeta:</b></p>{props.trip.planet}</C.ViagemCardInfo>
            <C.ViagemCardInfo><p><b>Descrição:</b></p>{props.trip.description}</C.ViagemCardInfo>
            <C.ViagemCardInfo><p><b>Data da partida:</b></p>{props.trip.date}</C.ViagemCardInfo>
            <C.ViagemCardInfo><p><b>Duração:</b></p>{props.trip.durationInDays} dias</C.ViagemCardInfo>
        </C.ViagemCardMain>
    )
}

export default ViagemCard