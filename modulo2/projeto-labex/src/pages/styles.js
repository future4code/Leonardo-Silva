import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";


 export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

// HOME PAGE
export const Main = styled.div`
color:gray;
text-align:center;
`

// LIST TRIPS PAGE
export const Viagens = styled.div`
display:flex;
width:200px;
height:200px;
border:1px solid black;
`

export const GridViagens = styled.div`
display:grid;
grid-template-columns: 200px 200px 200px 200px 200px 200px;
grid-gap: 10px;
justify-content:center;
padding-top:10px;
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
padding-top:20px;

`

export const RowViagens = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:200px;
padding-bottom:10px;
`




// CREATE TRIP PAGE
export const CustomForm = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    input{
        margin-bottom:5px;
    }
`
