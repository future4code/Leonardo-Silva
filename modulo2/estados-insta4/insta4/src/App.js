import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Botao = styled.button`
  margin: 5px 0 5px 0;
`
const NewImput = styled.input`
  margin-left:20px;
`

const DivPost = styled.div`
display: flex;
flex-direction: row;
padding:10px;
`

class App extends React.Component {
  state = {
    novoPost: [
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150' 
      },
      {
        nomeUsuario:'Leonardo',
        fotoUsuario:'https://picsum.photos/50/51',
        fotoPost:'https://picsum.photos/200/151' 
      },
      {
        nomeUsuario:'Gabriel',
        fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/152' 
      }
    ],

    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: "",
  };

  adicionarPosts = () =>{
    const newItem = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    }

    const newArray = [...this.state.novoPost, newItem]

    this.setState({novoPost: newArray})
  };

  onChangeNome = (event) => {

    this.setState({valorInputNome: event.target.value})

  }

  onChangePerfil = (event) => {

    this.setState({valorInputFotoPerfil: event.target.value})
    
  }

  onChangePost = (event) => {

    this.setState({valorInputFotoPost: event.target.value})
    
  }




  render() {

    const listaDePosts = this.state.novoPost.map((dados) => {
      return (
        <Post
          nomeUsuario={dados.nomeUsuario}
          fotoUsuario={dados.fotoUsuario}
          fotoPost={dados.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <DivPost><label>Nome:</label><NewImput value={this.state.valorInputNome} onChange={this.onChangeNome}/></DivPost>
        <DivPost><label>Foto do Usuário:</label><NewImput value={this.state.valorInputFotoPerfil} onChange={this.onChangePerfil}/></DivPost>
        <DivPost><label>Foto do post:</label><NewImput value={this.state.valorInputFotoPost} onChange={this.onChangePost}/></DivPost>
        <Botao onClick={this.adicionarPosts}>Enviar</Botao>
        
        {listaDePosts}

      </MainContainer>
    );
  }
}

export default App;
