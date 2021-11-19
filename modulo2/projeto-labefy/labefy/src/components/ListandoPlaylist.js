import React from "react";
import styled from "styled-components"
import axios from "axios";
import PaginaPlaylist from "./PaginasPlaylist";

const MainDiv = styled.div`
  display:flex;
  flex-direction:column; 
`

const DivLista = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding:5px;

  a:hover{
    cursor:pointer;
    color:#00FFFF;
  }
`



export default class ListandoPlaylist extends React.Component {
    render() { 
        return(
            <MainDiv>
                {this.props.lista.map((playlist) => {
                    return (
                        <DivLista key={playlist.id}>
                            <b><a onClick={() => this.props.novaPag(playlist)}>{playlist.name}</a></b>
                            <button onClick={() => this.props.deletandoPlaylist(playlist.id)}>x</button>
                        </DivLista>
                    )
                })}              
            </MainDiv>
        );
    }
}