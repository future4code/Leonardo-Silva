import React, {Component} from "react";
import styled from "styled-components";

const Form1 = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`

const Lista = styled.ol`
display: flex;
flex-direction: column;
align-items:center;
`

export class Etapa2 extends Component {
    render() {
        return (
            <Form1>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <Lista>
                    <h2>5. Qual curso?</h2>
                    <input type="text"/>
                </Lista>
                <Lista>
                    <h2>2. Qual a unidade de ensino?</h2>
                    <input type="text"/>
                </Lista>

            </Form1>
        );
    }
}