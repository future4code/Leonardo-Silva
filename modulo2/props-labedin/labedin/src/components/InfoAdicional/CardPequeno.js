import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div>
            <div className="smallcard-container">
                <p><b>Email:</b></p>
                <p>{ props.email }</p>
            </div> 
            <div className="smallcard-container">
                <p><b>Endereco:</b></p>
                <p>{ props.endereco }</p>
            </div>  
        </div>
        
    )
}

export default CardPequeno;