import React from "react";
import styled from "styled-components"
import axios from "axios";

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif; 
`

export default class CriacaoPlaylist extends React.Component {
    render() {
        return(
            <MainDiv>
                <h1>Criação de Playlist</h1>
                <p>Digite um nome para sua nova playlist</p>
                <input placeholder="nome da playlist" onChange={this.props.novaPlaylist}/>
                <br/>
                <button onClick={this.props.criandoPlaylist}>Criar</button>
            </MainDiv>
        );
    }
}