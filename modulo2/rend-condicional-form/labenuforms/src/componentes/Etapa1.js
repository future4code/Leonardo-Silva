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

export class Etapa1 extends Component {


    render() {
        return (
            <Form1>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <Lista>
                    <h2>1. Qual o seu nome?</h2>
                    <input type="text"/>
                </Lista>
                <Lista>
                    <h2>2. Qual a sua idade?</h2>
                    <input type="number"/>
                </Lista>
                <Lista>
                    <h2>1. Qual o seu email?</h2>
                    <input type="email"/>
                </Lista>
                <Lista>
                    <h2>4. Qual a sua escolaridade?</h2>
                    <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                    </select>
                </Lista>

            </Form1>
        );
    }
}