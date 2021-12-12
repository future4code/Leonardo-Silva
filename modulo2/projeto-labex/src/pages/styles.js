import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import outerspace from '../img/outerspace.gif'


 export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: url(${outerspace});
    background-size:cover;

    @media(max-width: 450px) {
      background-size:auto;
      }
  }
`

export const StyledButton = styled.button`
margin:0 10px 0 10px;
padding:10px;
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

// HOME PAGE
export const Main = styled.div`
color:gray;
text-align:center;

h1{
  color:white;
  font-size:40px;
}
`

// LIST TRIPS PAGE

export const GridViagens = styled.div`
min-width: 300px;
max-height: 80vh;
display:flex;
flex-wrap:wrap;
justify-content:center;

margin:25px;
margin-top:40px;
border-radius:10px;
padding: 5px;

border-radius: 10px;
backdrop-filter: blur(3px);
background: hsla(0, 0%, 100%, 0.438);
box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.718);
overflow-y: scroll;

&::-webkit-scrollbar {
  width: 6px;
}
 
&::-webkit-scrollbar-track {
  background: transparent;
}
 
&::-webkit-scrollbar-thumb {
  background-color: #00ffff;
  border-radius: 50px;
}

&::-webkit-scrollbar-track{
  margin: 15px;
}

p{
  color:black;
}

@media(max-width: 450px) {
  max-height:65vh;
  }
`

export const GridViagens2 = styled.div`
min-width: 300px;
max-height: 80vh;
display:flex;
flex-wrap;
flex-direction:column;
justify-content:center;
position:relative;

margin:25px;
margin-top:40px;
border-radius:10px;
padding: 5px;

border-radius: 10px;
backdrop-filter: blur(3px);
background: hsla(0, 0%, 100%, 0.438);
box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.718);
overflow-y: scroll;

&::-webkit-scrollbar {
  width: 6px;
}
 
&::-webkit-scrollbar-track {
  background: transparent;
}
 
&::-webkit-scrollbar-thumb {
  background-color: #2f0444;
  border-radius: 50px;
}

&::-webkit-scrollbar-track{
  margin: 15px;
}

p{
  color:black;
}

@media(max-width: 450px) {
  max-height:60vh;
  }
`

export const PCustom = styled.p`
color:black;
text-align:center;
`



// ADMIN HOME PAGE
export const ViagensAdmin = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
align-content:center;
padding-top:20px;

@media(max-width: 450px) {
  font-size: 15px;
  padding: 2px 5px;
  }
`

export const RowViagens = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:200px;
padding-bottom:10px;
`

export const TripName = styled.div`
display:flex;
justify-content:space-between;


`




// CREATE TRIP PAGE
export const CustomForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    background: hsla(0, 0%, 100%, 0.608);
    width:40vw;
    height:50vh;
    margin-top:40px;
    border-radius:10px;
    justify-content:space-around;
    
    @media(max-width: 450px) {
      min-height:65vh;
      min-width:80vw;
      }
`

// TRIP DETAILS PAGE
export const InfoTrip = styled.div`
display:flex;
flex-direction:row;
align-items:center;
height:40px;
width:500px;
justify-content:flex-start;
padding-left:500px;


p{
  padding-right:10px;
  color:black;
}
`

export const ViagemCardMain2 = styled.div`
display:flex;
flex-direction:column;
flex-wrap: wrap;
min-width: 350px;
height:150px;
border:1px solid black;
position:relative;
border: 1px solid  #f2f2f2;
backdrop-filter: blur(3px);
  background: hsla(0, 0%, 100%, 0.138);
box-shadow: 0px 0px 10px rgba(0,0,0, .6);
padding: 10px;
border-radius: 5px;
margin: 10px;
margin-top:40px;

@media(max-width: 450px) {
  min-width:250px;
  }
`

// VIAGEM CARD

export const ViagemCardMain = styled.div`
display:flex;
flex-direction:column;
flex-wrap: wrap;
min-width: 350px;
border:1px solid black;
position:relative;
border: 1px solid  #f2f2f2;
backdrop-filter: blur(3px);
  background: hsla(0, 0%, 100%, 0.138);
box-shadow: 0px 0px 10px rgba(0,0,0, .6);
padding: 10px;
border-radius: 5px;
margin: 10px;
flex: 1 360px;

@media(max-width: 450px) {
  min-width:250px;
  }
`

export const ViagemCardInfo = styled.div`
display:flex;
flex-direction:row;
align-items:center;
font-size:14px;
height:20px;
color:black;

p{
  color:black;
  padding-right:5px;
}
`

export const Row = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
align-items:center;

button{
  margin:0px 0px 0px 20px;
  
}

p{
  color:white;
}
`

export const Row2 = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
padding:5px 20px 5px 10px;
min-width:20vw;
position:relative;
border: 1px solid  #f2f2f2;
backdrop-filter: blur(3px);
  background: hsla(0, 0%, 100%, 0.138);
box-shadow: 0px 0px 10px rgba(0,0,0, .6);
color:black;
margin: 10px;

@media(max-width: 450px) {
  min-width:280px;
  }

a:hover{
  cursor:pointer;
  transition: all 0.2s;
  color:#00FFFF;
}
`

export const Row3 = styled.div`
display:flex;
flex-direction: column;
justify-content:space-around;
align-items:center;
padding:5px 20px 5px 10px;
width:25vw;
height:30vh;
position:relative;
border: 1px solid  #f2f2f2;
backdrop-filter: blur(3px);
background: hsla(0, 0%, 100%, 0.438);
box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.718);
color:black;
margin: 10px;
margin-top:40px;

@media(max-width: 450px) {
  min-width:280px;
  }

a:hover{
  cursor:pointer;
  transition: all 0.2s;
  color:#00FFFF;
}
`

export const Date = styled.input`
background-color:transparent;
border:none;
border-bottom:1px solid black;
width:200px;

`

export const Column = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;

h2{
  color:white;
}
`

export const TamanhoInput = styled.div`
  max-width:200px;
  min-width:200px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items: center;
`
// CREATE TRIP PAGE


export const TamanhoInput2 = styled.div`
  width:200px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items: center;
`