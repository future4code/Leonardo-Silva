import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center
`

const StyledInput = styled.input`
    margin:10px;
    padding:5px;
`

const StyledButton = styled.button`
    margin-top:10px;
`

export default class TelaCadastro extends React.Component {
    state = {
      nome: "",
      email: ""
    }

    cadastrandoNome = (event) => {
        this.setState({nome: event.target.value})
    }

    cadastrandoEmail = (event) => {
        this.setState({email: event.target.value})
    }

    finalizarCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }


        axios.post(url, body, {
            headers: {
                Authorization: "leonardo-silva-carver"
            }
        })
        .then((res) => {
            alert("Usuário cadastrado com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }
    
    render(){
      return (
        
        <MainDiv>
            <button onClick={this.props.paraATelaLista}>Trocar de página</button>
            <h2>Tela de Cadastro</h2>
            <div>
                <StyledInput placeholder="Nome" value={this.state.nome} onChange={this.cadastrandoNome}></StyledInput>
                <StyledInput placeholder="Email" value={this.state.email} onChange={this.cadastrandoEmail}></StyledInput>
            </div>
            <StyledButton onClick={this.finalizarCadastro}>Cadastrar</StyledButton>
        </MainDiv>
        
      );
    }
  }