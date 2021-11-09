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

export class Etapa3 extends Component {
    render() {
        return (
            <Form1>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <Lista>
                    <h2>1. Porque você não terminou um curso de graduação?</h2>
                    <input type="text"/>
                </Lista>
                <Lista>
                    <h2>2. Você fez algum curso complementar?</h2>
                    <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de inglês</option>
                    </select>
                </Lista>

            </Form1>
        );
    }
}