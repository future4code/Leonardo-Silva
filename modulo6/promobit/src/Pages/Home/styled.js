import styled from 'styled-components'

export const Main = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Pag = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:50px;
margin-bottom:50px;
`

export const MovieList = styled.div`
display:grid;
grid-template-columns: repeat(5, 200px) ;
max-width: 1500px;
justify-content: space-around;
margin-top:50px;
gap: 25px 50px;
`

export const Movie = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
width:200px;
height:400px;

p{
    font-size:12px
}
`

export const MovieImg = styled.img`
width:100%;
height:100%;
border:1px solid white;
border-radius:10px;
box-shadow: 0px 0px 8px 8px #f2f2f2;
margin-bottom:10px;
`

export const Ptitle = styled.p`
font-size: 20px;
height:10%;
margin:0;

:hover{
    cursor:pointer;
}
`

export const Pdate = styled.p`
font-size: 20px;
height:10%;
margin:0;
color: #646464;
`