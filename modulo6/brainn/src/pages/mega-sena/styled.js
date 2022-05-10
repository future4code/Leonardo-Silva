import styled from 'styled-components'

export const Main = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction: row;
background-color: #6BEFA3;
`
export const BackWithColor = styled.div`
width:30%;
height:100vh;
background-color: #6BEFA3;
display:flex;
flex-direction:column;
justify-content:space-around ;
p{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color:#ffffff;
    font-size: 14px;
    font-style: normal;
    margin-left:50px;
}
label{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color:#ffffff;
    font-size: 14px;
    font-style: normal;
    margin-left:50px;
}
`

export const Mega = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
align-items: center;
margin:50px;
h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
    color: #ffffff
}
`

export const MegaImg = styled.img`
width:40px;
height:40px;
`

export const Concurso = styled.div`
display:flex;
flex-direction: column;
`

export const Select = styled.select`
width:40%;
height:40px;
margin-left: 50px;
text-align: start;
padding-left:10px;
font-family: 'Montserrat', sans-serif;
font-weight: 500;
font-style: normal;
border:none;
border-radius: 10px;

`

export const BackWithoutColor = styled.div`
width:70%;
height:100%;
background-color: #EFEFEF;
box-sizing: border-box;
border-left: 10% solid #EFEFEF;
border-bottom-left-radius:10% 50%;
border-top-left-radius:10% 50%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Circles = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:5em;
height:5em;
border-radius: 50px;
background-color: white;
margin-right:25px;

b{
    font-size: 1.5em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}
`
export const RowCircle = styled.div`
display:flex;
flex-direction: row;

`

export const FinalText = styled.p`
position:absolute;
bottom:50px;
font-size:16px;

`