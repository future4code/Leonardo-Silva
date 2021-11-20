import React from "react";
import styled from "styled-components"
import axios from "axios";
import {FiAlertCircle, FiPlay} from "react-icons/fi";

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif;
  min-height:0px;
`
const DivButton = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:20px;
  border:none;
  width:150px;
  height:40px;
  border-radius:15px;
  border:1px solid transparent;
  background-color:#D3D3D3;
  transition: all 0.2s;

  :hover{
    cursor:pointer;
    transition: all 0.2s;
    color:#00FFFF;
    background-color:gray;
    box-shadow:0px 0px 5px black;
  }

  :active{
    box-shadow:inset 0px 0px 15px black;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
    width:100px;
    height:40px;
    font-size:12px;
    align-items:center;
    margin-left:10px;
  }
`
const Div1 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:200px;
  align-items:center;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif; 

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
    h1{
      text-align:center
      
    }
    font-size:12px;
    p{
        text-align:center
    }
    margin-bottom:25px;
  }
`
const Div2 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-content: flex-start;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  flex-flow: column nowrap;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif;
  height:599px;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
    height:272px;
  }
`
const DivRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:20px;

    a{
        margin-left:10px;
        font-size:13px;      
    }

    p{
        margin-left:5px;      
    }

    a:hover{
        cursor:pointer;
        text-decoration:underline;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
        a{
            font-size:0px
        }
      }
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
const DivPlaylist = styled.div`
    border:1px solid black;
    margin-bottom:5px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:90%;
    height:100px;
    margin-left:50px;
    border-radius:15px;
    padding-left:10px;
    padding-right:10px;
    background-color:#fff;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
        margin-left:20px;
        width:80%;
        background-color:black;

        p{
            font-size:5px;
        }
      }
`
const DivSemTrack = styled.div`
    margin-left:50px;
`
const DivAudio = styled.audio`
    height:25px;
    width:350px;
`
const DivFrame = styled.iframe`
    width:500px;
    border-radius:15px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
        width:230px;
        height:80px;
      }
`
const DivA = styled.div`
    width:20%;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
        font-size:0px;
      }
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
                    return <DivSemTrack><p>Nenhuma track...</p></DivSemTrack>
                } else {
                    return <div>{this.props.infoPlaylist.map((playlist) => {
                        return <DivPlaylist key={playlist.id}>
                            <DivA>{playlist.name}</DivA>
                            <DivA>{playlist.artist}</DivA>
                            <DivRow><DivFrame src={playlist.url} width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></DivFrame><a onClick={() => this.deletandoTrack(this.props.infoId, playlist.id)}>deletar</a></DivRow>
                        </DivPlaylist>
                    })}</div>
                }
            case 2:
                return <DivColumn>
                    <DivDentro>Nome da Música: <input placeholder="nome música" onChange={this.alterandoMusic}></input></DivDentro>
                    <DivDentro>Artista: <input placeholder="nome artista(s)" onChange={this.alterandoArtist}></input></DivDentro>
                    <DivDentro>Link: <input placeholder="link spotify da música" onChange={this.alterandoLink}></input></DivDentro>
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
            this.props.pegandoAsTracks(this.props.infoId)
            this.pagDeTrack(this.props.pagTrack)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    deletandoTrack = async(idPlaylist, idTrack) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${idTrack}`

        try {
            const res = await axios.delete(url, {
                headers: {
                    Authorization: "leonardo-silva-carver"
                }
            })

            alert("Track removida com sucesso")
            this.props.pegandoAsTracks(this.props.infoId)
        } catch (error) {
            alert(error.response.data.message)
        }
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
        return(
            <MainDiv>
                <Div1>
                    <h1>Playlist: {this.props.entry.name}</h1>
                    <p>Número de tracks: {this.props.infoQuantidade}</p>
                    <DivRow>
                        <DivButton onClick={this.props.pagTrack1}><FiAlertCircle/><p>Informações</p></DivButton>
                        <DivButton onClick={this.props.pagTrack2}><FiPlay/><p>Adicionar Track</p></DivButton>
                    </DivRow>
                </Div1>
                <Div2>
                    {this.pagDeTrack(this.props.pagTrack)}
                </Div2>
            </MainDiv>
        );
    }
}