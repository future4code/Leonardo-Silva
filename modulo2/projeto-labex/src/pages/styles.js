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
  }
`;

export const StyledButton = styled.button`
margin:0 10px 0 10px;
padding:10px;

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
display:grid;
min-width: 350px;
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
  background-color: #2f0444;
  border-radius: 50px;
}

&::-webkit-scrollbar-track{
  margin: 15px;
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
width:200px;

:hover{
  background-color:yellow;
  cursor:pointer;
}
`




// CREATE TRIP PAGE
export const CustomForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    input{
        margin-bottom:5px;
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
position: relative;
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
