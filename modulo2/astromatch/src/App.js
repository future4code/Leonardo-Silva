import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import ContainerPerfil from './components/ContainerPerfil/ContainerPerfil';
import { IconContext } from "react-icons";
import { FiUserCheck, FiUser } from "react-icons/fi";
import axios from 'axios';

const DivCentro = styled.div`
  width:350px;
  height:550px;
  top:25%;
  left:40%;
  border: 1px solid black;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:#EEEEEE;
`

const DivHeader = styled.div`
  display:flex;
  height:50px;
  width:350px;
  border-bottom:1px solid gray;
  font-family: spotify-circular, Helvetica, Arial, sans-serif;
  justify-content:space-around;
  align-items:center;
  background-color:white;
`
const DivFooter = styled.p`
  font-size:8px;
`

const H1z = styled.h1`
`
const DivRow = styled.div`
  display:flex;
  flex-direction:row
`

const H1p = styled.h1`
  font-size:20px;
  color:#AA14F0;
`

const H1s = styled.h1`
font-size:20px;
color:black;
`

function App() {

  useEffect (() => {
    getProfile()
  },[])

  const[perfil, setPerfil] = useState({})

  const getProfile = () => {
    const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:leonardo/person"

    axios.get(url)
    .then((res) => {
      setPerfil(res.data.profile)
    })
    .catch((err) => {
      alert("ocorreu um erro")
    })
  }

  return (
    <DivCentro>
      {console.log(perfil)}
      <DivHeader>
        <H1z>
        <IconContext.Provider value={{ color: "#BC8CF2", className: "global-class-name", size:"1.7em" }}>
          <div>
            <button><FiUser /></button>
          </div>
        </IconContext.Provider>
        </H1z>
        <DivRow><H1p>Astro</H1p><H1s>Match</H1s></DivRow>
        <IconContext.Provider value={{ color: "#BC8CF2", className: "global-class-name", size:"1.7em" }}>
          <div>
            <button><FiUserCheck /></button>
          </div>
        </IconContext.Provider>
      </DivHeader>
      <ContainerPerfil perfil={perfil}/>
      <DivFooter>Desenvolvido por Leozbroca ©</DivFooter>
    </DivCentro>
  );
}

export default App;
