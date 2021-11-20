import React from "react";
import styled from "styled-components"
import {FiPlusCircle} from "react-icons/fi";

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif; 

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
    h1{
      text-align:center
    }

    p{
        text-align:center
    }
  }
`
const DivButtonAddPlaylist = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  width:100px;
  height:40px;
  border-radius:15px;
  border:1px solid transparent;
  background-color:#D3D3D3;
  transition: all 0.2s;

  p{
    padding-left:5px;
  }
  
  :hover{
    transition: all 0.2s;
    color:#00FFFF;
    background-color:gray;
    box-shadow:0px 0px 5px black;
    cursor:pointer;
    
  }

  :active{
    box-shadow:inset 0px 0px 15px black;
  }
`

export default class CriacaoPlaylist extends React.Component {
    render() {
        return(
            <MainDiv>
                <h1>Criação de Playlist</h1>
                <p>Digite um nome para sua nova playlist</p>
                <input placeholder="nome da playlist" onChange={this.props.novaPlaylist}/>
                <br/>
                <DivButtonAddPlaylist onClick={this.props.criandoPlaylist}><FiPlusCircle/><p>Adicionar</p></DivButtonAddPlaylist>
            </MainDiv>
        );
    }
}