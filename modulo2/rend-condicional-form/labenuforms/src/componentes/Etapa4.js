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

export class Etapa4 extends Component {
    render() {
        return (
            <Form1>
                <h1>O FORMULÁRIO ACABOU</h1>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Form1>
        );
    }
}