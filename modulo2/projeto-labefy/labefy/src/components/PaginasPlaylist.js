import React from "react";
import styled from "styled-components"
import axios from "axios";

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif; 
`
const DivButton = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border:1px solid black;
  margin-left:10px;

:hover{
    cursor:pointer;
}
  
`
const Div1 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:30%;
`
const Div2 = styled.div`
  display:flex;
  flex-direction:column;
  height:70%;
`
const DivRow = styled.div`
    display:flex;
    flex-direction:row;
`
const DivColumn = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:50px;
`
const DivDentro = styled.div`
    padding:10px;
`


export default class PaginaPlaylist extends React.Component {
    state = {
        pag: 1,
        music: "",
        artist: "",
        link: "",
    }

    pagDeTrack = (number) => {
        switch(number){
            case 1:
                if(this.props.infoQuantidade === 0 || undefined){
                    return <div><p>Nenhuma track...</p></div>
                } else {
                    return <div>{this.props.infoPlaylist.map((playlist) => {
                        return playlist.name
                    })}</div>
                }
            case 2:
                return <DivColumn>
                    <DivDentro>Nome da Música: <input placeholder="nome música" onChange={this.alterandoMusic}></input></DivDentro>
                    <DivDentro>Artista: <input placeholder="nome artista" onChange={this.alterandoArtist}></input></DivDentro>
                    <DivDentro>Link: <input placeholder="link música" onChange={this.alterandoLink}></input></DivDentro>
                    <DivDentro><button onClick={() => this.adicionandoTrack(this.props.infoId)}>Adicionar</button></DivDentro>
                </DivColumn>
        }
    }

    adicionandoTrack = async(id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.music,
            artist: this.state.artist,
            url: this.state.link
        }

        try {
            const res = await axios.post(url, body, {
                headers: {
                    Authorization: "leonardo-silva-carver"
                }
            })

            alert("Track Adicionada com sucesso")
            this.props.pegandoAsTracks()
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    pagTrack1 = () => {
        this.setState({pag: 1})
    }
    
    pagTrack2 = () => {
        this.setState({pag: 2})
    }

    alterandoMusic = (event) => {
        this.setState({music: event.target.value})
    }
    alterandoArtist = (event) => {
        this.setState({artist: event.target.value})
    }
    alterandoLink = (event) => {
        this.setState({link: event.target.value})
    }

    render() {
        console.log(this.props.pagPlaylists)
        return(
            <MainDiv>
                <Div1>
                    <h1>Playlist: {this.props.entry.name}</h1>
                    <p>Número de tracks: {this.props.infoQuantidade}</p>
                    <DivRow>
                        <DivButton onClick={this.pagTrack1}>Informações</DivButton>
                        <DivButton onClick={this.pagTrack2}>Adicionar Track</DivButton>
                    </DivRow>
                </Div1>
                <Div2>
                    {this.pagDeTrack(this.state.pag)}
                </Div2>
            </MainDiv>
        );
    }
}