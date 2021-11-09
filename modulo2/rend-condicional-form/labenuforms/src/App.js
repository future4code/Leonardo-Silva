import './App.css';
import React from 'react'
import styled from 'styled-components';
import {Etapa1} from './componentes/Etapa1';
import {Etapa2} from './componentes/Etapa2';
import {Etapa3} from './componentes/Etapa3';
import {Etapa4} from './componentes/Etapa4';

const ButtonP = styled.button`
margin-top:50px;
`

const Form1 = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`


class App extends React.Component {

  state = {
    etapa:1,
    botao:1
  }

  
  
  
  zerando = () => {
    this.setState({botao: null})
  }

  renderizando = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1/>;
      case 2: 
        return <Etapa2/>;
      case 3: 
        return <Etapa3/>;
      case 4: 
        return <Etapa4/>;  
    }
  }
  

  proxPagina = () => {
    let valorAtual = this.state.etapa
    let novoValor = valorAtual + 1
    this.setState({etapa: novoValor})
  }

  aparecerBotao = () => {
    if (this.state.etapa !== 4){
      return <ButtonP onClick={this.proxPagina}>Próxima etapa</ButtonP>
    }
  }
  
  render() {

    return (
      <Form1>
        {this.renderizando()}
        {this.aparecerBotao()}
      </Form1>
    );
  }
}

export default App;
