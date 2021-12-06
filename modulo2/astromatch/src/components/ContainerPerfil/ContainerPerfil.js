import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { FiX, FiHeart } from "react-icons/fi";

const DivPerfil = styled.div`
  width:330px;
  height:465px;
  border-radius:15px;
  margin-top:10px;
  box-shadow: 2px 2px 5px gray;
 
`
const DivImg = styled.img`
  height:465px;
  width:330px;
  border-radius:15px;
  z-index:0;
  position:absolute;
  filter: blur(5px) brightness(85%);
  
`
const DivImg2 = styled.img`
  height:365px;
  width:330px;
  z-index:0;
  position:absolute;
  padding-top:15px;
  filter: brightness(85%);
  border:none;
`
const DivImg3 = styled.div`
height:465px;
width:330px;
border-radius:15px;
  z-index:2;
  position:absolute;
  box-shadow:inset 0px -85px 5px 0px  black;
  opacity:0.8
`
  

const DivBio = styled.div`
    padding:10px;
    z-index:2;
    color:white;
    position:absolute;
    width:310px;
    padding-top:280px;
`

const Negrito = styled.b`
    font-size:25px;
    color:white;
`
const DivRow = styled.div`
  display:flex;
  width:310px;
  padding-top:395px;
  flex-direction:row;
  position:absolute;
  justify-content:space-evenly;
  z-index:3
  
  
`
const DivButton = styled.button`
    width:60px;
    height:60px;
    background-color:transparent;
    border-radius:180px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    

    :hover{
        border-color:green;
        
    }
`
const DivButton2 = styled.button`
    width:60px;
    height:60px;
    background-color:transparent;
    border-radius:180px;
    

    :hover{
        border-color:red;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }
`

const ContainerPerfil = (props) => {
    return (
        <DivPerfil>
            <DivImg src={props.perfil.photo}></DivImg>
            <DivImg2 src={props.perfil.photo}></DivImg2>
            <DivImg3></DivImg3>
            <DivBio>
                <Negrito>{props.perfil.name}</Negrito>, <Negrito>{props.perfil.age}</Negrito> <br />
                {props.perfil.bio}
                
            </DivBio> 
            <DivRow>
                <IconContext.Provider value={{ color: "red", className: "global-class-name", size: "2em" }}>
                    <div>
                        <DivButton2><FiX /></DivButton2>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "green", className: "global-class-name", size: "2em" }}>
                    <div>
                        <DivButton><FiHeart /></DivButton>
                    </div>
                </IconContext.Provider>
            </DivRow>
        </DivPerfil>
    );
  }
  
  export default ContainerPerfil;