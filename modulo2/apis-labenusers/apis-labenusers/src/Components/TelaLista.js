import axios from 'axios';
import React, { useReducer } from 'react';
import styled from 'styled-components'

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center
`

const CardUsuario = styled.div`
    padding:10px;
    margin:10px;
    border:1px solid black;
    display:flex;
    width:300px;
    justify-content:space-between;
`

export default class TelaLista extends React.Component {
    state = {
      listaUsuarios: []
    }

    componentDidMount() {
        this.pegandoLista()
    }

    pegandoLista = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "leonardo-silva-carver"
            }
        })
        .then((res) => {
            this.setState({listaUsuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente!")
        })
    }

    deletandoUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "leonardo-silva-carver"
            }
        })
        .then((res) => {
            console.log(res)
            alert("Usuário deletado com sucesso!")
            this.pegandoLista()
        })
        .catch((err) => {
            console.log(err)
            alert(err.response.data.message)
        })
    }
    
    render(){
        const listaDeUsuarios = this.state.listaUsuarios.map((usuario) => {
            return (
            <CardUsuario key={usuario.id}>
                {usuario.name}
                <button onClick={() => 
                    this.deletandoUsuario(usuario.id)
                }>x</button>
            </CardUsuario>
            )
        })

      return (
        
        <MainDiv>
            <button onClick={this.props.paraATelaCadastro}>Trocar de página</button>
            <h2>Lista de usuários</h2>
            <div>
            {listaDeUsuarios}
            </div>
        </MainDiv>
        
      );
    }
  }