import React from "react"
import styled from "styled-components"
import axios from "axios"
import "./App.css" 
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
`
const ListaPlay = styled.div`
  width:20%;
  height:800px;
  background-color:gray;
  border-right:1px solid black;
  font-family:Circular,spotify-circular,Helvetica,Arial,sans-serif;
`
const TelaPrincipal = styled.div`
  width:80%;
  height:800px;
  background-color:white;
`
const Paginas = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  width:80%;

  h2{
    font-size:18px;
  }
  h2:hover{
    color:#00FFFF;
    cursor:pointer;
  }
`

export default class App extends React.Component {
  state = {
    playlist: "",
    lista: [],
    pagPrincipal: 1,
    entry: [],
    infoQuantidade: 0,
    infoPlaylist: [],
    infoId: "",
  }

  componentDidMount() {
    this.listaPlaylist()
  }

  criandoPlaylist = async() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playlist
    }

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
          />
      case 2:
        return <PaginaPlaylist
            entry={this.state.entry}
            infoQuantidade={this.state.infoQuantidade}
            infoPlaylist={this.state.infoPlaylist}
            infoId={this.state.infoId}
            pegandoAsTracks={this.pegandoAsTracks}
          />
      default:
        return <CriacaoPlaylist
            criandoPlaylist={this.criandoPlaylist}
            novaPlaylist={this.novaPlaylist}
          />
    }
  }

  novaPag = (playlist) => {
    this.setState({entry: playlist, pagPrincipal: 2, pagPlaylists: 1})
    this.pegandoAsTracks(playlist.id)
  }

  novaPagPrincipal = () => {
    this.setState({pagPrincipal: 1})
  } 

  


  
  

 
  render() { 
    return (
      <MainDiv>

        <MainHeader>
          <Paginas>
            <h1>Labefy</h1>
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

        </MainFooter>

      </MainDiv>
    );
  }
}
