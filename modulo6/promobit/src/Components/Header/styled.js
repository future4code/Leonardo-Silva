import styled from 'styled-components'

export const Main = styled.div`
display:flex;
flex-direction: column;
width:100%;
height:45vh;
`

export const Head = styled.div`
display:flex;
align-items: center;
width:100%;
height:10%;
background-color:#5C16C5;
z-index: 2;

p{
    margin-left: 50px;
    font-size:24px;
    color:white
}
`

export const DivLogo = styled.div`
width:50px;
height:20px;
background-color: #FFFFFF;
border-radius: 15px;
margin-left:10px;
`

export const ButtonHome = styled.button`
display:flex;
flex-direction: row;
justify-content:center;
height:35px;
width:165px;
align-items: center;
background-color: transparent;
border:none;
margin-left:100px;

p{
    margin:0;
}

b{
    margin:0;
}

:hover{
    cursor:pointer;
    border-radius: 15px;
}
`

export const Categories = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
height:90%;
background-color:#2D0C5E;

h1{
    font-size: 36px;
    width:50%;
    color:#FFFFFF;
}

p{
    color:#FFFFFF;
}
`

export const MovieInfo = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
width:100%;
height:60%;
background-color:#2D0C5E;
position:absolute;
z-index: 1;

h1{
    font-size: 36px;
    width:50%;
    color:#FFFFFF;
}

p{
    color:#FFFFFF;
}
`

export const Filter = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content: center;
width:85%;
`

export const Option = styled.div`
display:flex;
align-content: center;
padding:8px 16px 8px 16px;
border-radius: 5px;
background-color: #FFFFFF;
margin-left:8px;
margin-bottom:8px;

p{
    font-size: 16px;
    color:black;
}

:hover{
    cursor:pointer;
    background-color: #D18000;
}
`

export const OptionChosed = styled.div`
display:flex;
align-content: center;
padding:8px 6px 8px 6px;
border-radius: 5px;
background-color: #D18000;
margin-left:8px;
margin-bottom:8px;

p{
    font-size: 16px;
    color:black;
}

:hover{
    cursor:pointer;
}
`

export const Title = styled.b`
padding-right:4px;
`

export const TitleMovie = styled.b`
font-size:32px;
color:white;
`

export const PosterImg = styled.img`
width:330px;
height:520px;
border-radius: 10px;
box-shadow: 0px 0px 8px 0px black;
margin-top:130px;
`

export const MovieDescription = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
width:60%;
height:80%;
margin-top:50px;
margin-left:25px;

p{
    font-size: 16px;;
}
`
export const DivSinopse= styled.div`
margin-top:20px;
`

export const MovieSinopse = styled.b`
font-size:20px;
color:white;
margin-top:20px;
`

export const Crew = styled.div`
display:flex;
flex-direction: column;
width:200px;
margin:0;

p{
    height:20px;
    margin:0;
}
`

export const CrewRow = styled.div`
display:grid;
grid-template-rows: repeat(2, 50px) ;
grid-template-columns: repeat(3, 250px) ;
`

export const PercentRow = styled.div`
display:flex;
flex-direction:row;
width:200px;
align-items:center;

P{
    font-size:16px;
    margin:0;
    margin-left:20px;
}
`

export const PsinopseInfo = styled.p`
margin-top:5px;
`
