import React from "react";
import styled from "styled-components"
import {FiX} from "react-icons/fi";

const MainDiv = styled.div`
  display:flex;
  flex-direction:column; 
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif;
`
const DivLista = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding:5px 5px 5px 5px;
  transition: all 0.2s;

  a:hover{
    cursor:pointer;
    color:#00FFFF;
    transition: all 0.2s;
  }
`
const Div1 = styled.div`
  font-size:24px;
  color:white;
  text-align:center;
  padding-top:20px;
  padding-bottom:20px;
  opacity: 0.8;
`
const DivButtonRemove = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  opacity:0.5;
  
  :hover{
    transition: all 0.2s;
    opacity:1;
  }
`

export default class ListandoPlaylist extends React.Component {
    render() { 
        return(
            <MainDiv>
                <Div1><b>Playlists:</b></Div1>
                {this.props.lista.map((playlist) => {
                    return (
                        <DivLista key={playlist.id}>
                            <b><a onClick={() => this.props.novaPag(playlist)}>{playlist.name}</a></b>
                            <DivButtonRemove onClick={() => this.props.deletandoPlaylist(playlist.id)}><FiX/></DivButtonRemove>
                        </DivLista>
                    )
                })}              
            </MainDiv>
        );
    }
}