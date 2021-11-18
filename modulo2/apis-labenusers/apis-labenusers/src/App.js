import React from 'react';
import styled from 'styled-components'
import TelaCadastro from './Components/TelaCadastro';
import TelaLista from './Components/TelaLista';

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
`

const MenorDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolhendoTela = () => {
    switch(this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro paraATelaLista={this.paraATelaLista}/>
      case "lista":
        return <TelaLista paraATelaCadastro={this.paraATelaCadastro}/>
      default:
        return <div>Erro, pagína não encontrada!</div>
    }
  }

  paraATelaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  paraATelaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return (
      <MainDiv>
        <MenorDiv>
          <h1>Labenusers</h1>
        </MenorDiv>
        {this.escolhendoTela()}
      </MainDiv>
    );
  }
}
