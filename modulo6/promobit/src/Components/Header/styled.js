import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45vh;
  margin-bottom:10px;

  @media (max-width: 650px) {
    height: auto;
  }

  @media (max-height: 500px) {
    height: auto;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: #5c16c5;
  z-index: 2;

  p {
    margin-left: 50px;
    font-size: 24px;
    color: white;
  }
`;

export const DivLogo = styled.div`
  width: 50px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  margin-left: 10px;
`;

export const ButtonHome = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 35px;
  width: 165px;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-left: 100px;

  p {
    margin: 0;
  }

  b {
    margin: 0;
  }

  :hover {
    cursor: pointer;
    border-radius: 15px;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  background-color: #2d0c5e;

  h1 {
    font-size: 36px;
    width: 50%;
    color: #ffffff;
  }

  p {
    color: #ffffff;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 26px;
    }
  }

  @media (max-height: 500px) {
    h1 {
      font-size: 26px;
    }
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  background-color: #2d0c5e;
  position: absolute;
  z-index: 1;

  h1 {
    font-size: 36px;
    color: #ffffff;
  }

  p {
    color: #ffffff;
  }

  @media (max-width: 650px) {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    position: unset;

    h1 {
      font-size: 24px;
    }
  }

  @media (max-height: 500px) {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    position: unset;

    h1 {
      font-size: 24px;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 85%;

  @media (max-height: 500px) {
    margin-bottom: 20px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-content: center;
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-left: 8px;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    color: black;
  }

  :hover {
    cursor: pointer;
    background-color: #d18000;
    transition: all 0.5s;
  }
`;

export const OptionChosed = styled.div`
  display: flex;
  align-content: center;
  padding: 8px 6px 8px 6px;
  border-radius: 5px;
  background-color: #d18000;
  margin-left: 8px;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    color: black;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Title = styled.b`
  padding-right: 4px;
`;

export const TitleMovie = styled.b`
  font-size: 32px;
  color: white;

  @media (max-width: 650px) {
    font-size: 28px;
  }
`;

export const PosterImg = styled.img`
  width: 330px;
  height: 520px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px black;
  margin-top: 130px;

  @media (max-width: 650px) {
    position: absolute;
    width: 10em;
    height: 15em;
    margin-top: 50px;
  }

  @media (max-height: 500px) {
    position: absolute;
    width: 10em;
    height: 15em;
    margin-top: 50px;
  }
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  height: 80%;
  margin-top: 50px;
  margin-left: 25px;

  p {
    font-size: 16px;
  }

  @media (max-width: 650px) {
    justify-content: center;
    min-width: 80%;
    height: auto;
    margin-top: 320px;
  }

  @media (max-height: 500px) {
    justify-content: center;
    min-width: 80%;
    height: auto;
    margin-top: 320px;
  }
`;
export const DivSinopse = styled.div`
  margin-top: 20px;
`;

export const MovieSinopse = styled.b`
  font-size: 20px;
  color: white;
  margin-top: 20px;
`;

export const Crew = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0;

  p {
    height: 20px;
    margin: 0;
  }
`;

export const CrewRow = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 50px);
  grid-template-columns: repeat(3, 250px);

  @media (max-width: 650px) {
    grid-template-rows: repeat(5, 50px);
    grid-template-columns: repeat(1, 250px);
  }

  @media (max-height: 500px) {
    grid-template-rows: repeat(3, 50px);
    grid-template-columns: repeat(2, 200px);
  }
`;

export const PercentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  align-items: center;

  P {
    font-size: 16px;
    margin: 0;
    margin-left: 20px;
  }
`;

export const PsinopseInfo = styled.p`
  margin-top: 5px;
`;
