import React from "react"
import styled from "styled-components"
import axios from "axios"
import "./App.css" 
import logo from "./img/logo.png"
import CriacaoPlaylist from "./components/CriacaoPlaylist"
import ListandoPlaylist from "./components/ListandoPlaylist"
import PaginaPlaylist from "./components/PaginasPlaylist"

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
`
const MainHeader = styled.header`
  position:relative;
  background-color:black;
  color:white;
  width:100%;
  top:0;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif;
  display:flex;
  justify-content:center;
`
const DivLogo = styled.img`
  width:80px;
  height:80px;
  padding-right:15px;
`
const ImgELogo = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`
const MainBody = styled.body`
  display:flex;
  flex-direction:row;
  align-content:stretch;
`
const MainFooter = styled.footer`
  position:relative;
  width:100%;
  height:89px;
  background-color:black;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif;
  color:white;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  
  p{
    font-size:12px;
  }
`
const ListaPlay = styled.div`
  width:20%;
  height:800px;
  background-color:gray;
  border-right:1px solid black;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
    width:40%;
    height:498px;
    a{
      font-size:14px;
    }
  }
`
const TelaPrincipal = styled.div`
  width:80%;
  background-color:white;
  height:100%;
`
const Paginas = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  width:80%;
  transition: all 0.2s;

  h2{
    font-size:18px;
  }

  h2:hover{
    color:#00FFFF;
    cursor:pointer;
    transition: all 0.2s;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
    h2{
      font-size:14px;
      padding-left:25px;
    }
  }
`

export default class App extends React.Component {
  state = {
    playlist: "",
    lista: [],
    pagPrincipal: 1,
    entry: [],
    infoQuantidade: 0,
    quantidadeTotal:0,
    infoPlaylist: [],
    infoId: "",
    pagTrack: 1,
  }

  componentDidMount() {
    this.listaPlaylist()
  }

  criandoPlaylist = async() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playlist
    }

    if(this.state.quantidadeTotal < 25){ 
      try{
        const res = await axios.post(url, body, {
          headers: {
            Authorization: "leonardo-silva-carver"
          }
        })

        alert("Playlist criada com sucesso!")
        this.listaPlaylist()
        this.setState({playlist: ""})

      } catch(error) {
        alert(error.response.data.message)
      }
    } else {
      alert("Atenção! Número maxímo de playlists atingido.")
    }
  }

  novaPlaylist = (event) => {
    this.setState({playlist: event.target.value})
  }

  listaPlaylist = async() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    try{
        const res = await axios.get(url, {
            headers: {
              Authorization: "leonardo-silva-carver"
            }
        })   
    
        this.setState({lista: res.data.result.list})
        this.setState({quantidadeTotal: res.data.result.quantity})
    } catch (error) {
        alert(error.response.data.message)
    }
  }

  pegandoAsTracks = async(id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: "leonardo-silva-carver"
        }
      })

      this.setState({infoQuantidade: res.data.result.quantity})
      this.setState({infoPlaylist: res.data.result.tracks})
      this.setState({infoId: id})
    } catch (error){
      alert(error.response.data.message)
    }

  }

  deletandoPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
        headers: {
          Authorization: "leonardo-silva-carver"
        }
    })
    .then((res) => {
        alert("Playlist deletada com sucesso!")
        this.listaPlaylist()
        this.setState({pagPrincipal:1})
    })
    .catch ((error) => {
        alert(error.response.data.message)
    })
  }

  selecionandoPag = (number) => {
    switch(number){
      case 1:
        return <CriacaoPlaylist
            criandoPlaylist={this.criandoPlaylist}
            novaPlaylist={this.novaPlaylist}
            playlist={this.state.playlist}
          />
      case 2:
        return <PaginaPlaylist
            entry={this.state.entry}
            infoQuantidade={this.state.infoQuantidade}
            infoPlaylist={this.state.infoPlaylist}
            infoId={this.state.infoId}
            pegandoAsTracks={this.pegandoAsTracks}
            pagTrack={this.state.pagTrack}
            pagTrack1={this.pagTrack1}
            pagTrack2={this.pagTrack2}
          />
      default:
        return <CriacaoPlaylist
            criandoPlaylist={this.criandoPlaylist}
            novaPlaylist={this.novaPlaylist}
          />
    }
  }

  novaPag = (playlist) => {
    this.setState({entry: playlist, pagPrincipal: 2, pagTrack: 1})
    this.pegandoAsTracks(playlist.id)
  }

  novaPagPrincipal = () => {
    this.setState({pagPrincipal: 1})
  } 

  pagTrack1 = () => {
    this.setState({pagTrack: 1})
  }

  pagTrack2 = () => {
    this.setState({pagTrack: 2})
  }

  render() { 
    return (
      <MainDiv>
        <MainHeader>
          <Paginas>
            <ImgELogo><DivLogo src={logo}/><h1>Labefy</h1></ImgELogo>
            <h2 onClick={() => this.novaPagPrincipal()}>Criacão de Playlists</h2>
          </Paginas>
        </MainHeader>
        
        <MainBody>
          <ListaPlay>
            <ListandoPlaylist
              lista={this.state.lista}
              deletandoPlaylist={this.deletandoPlaylist}
              pagPrincipal={this.state.pagPrincipal}
              novaPag={this.novaPag}
              pegandoAsTracks={this.pegandoAsTracks}
            />
          </ListaPlay>
          <TelaPrincipal>
            {this.selecionandoPag(this.state.pagPrincipal)}
          </TelaPrincipal>
        </MainBody>

        <MainFooter>
          <p>Desenvolvido por Leonardo Broca ©</p>
        </MainFooter>
      </MainDiv>
    );
  }
}
