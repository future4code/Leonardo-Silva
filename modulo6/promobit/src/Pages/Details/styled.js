import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Crew = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 75%;
  height: 450px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  flex-flow: column wrap;

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 50px;
    background: #e0e0e0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2d0c5e;
    border-radius: 50px;
  }
`;

export const TitleCrew = styled.p`
  font-size: 32px;
  margin: 0;
  margin-top: 250px;
  align-self: flex-start;
  margin-left: 13%;

  @media (max-width: 650px) {
    margin-top: 50px;
  }

  @media (max-height: 500px) {
    margin-top: 50px;
  }
`;

export const TitleInfo = styled.p`
  font-size: 32px;
  margin: 0;
  margin-top: 100px;
  align-self: flex-start;
  margin-left: 13%;
  margin-bottom: 10px;
`;

export const CrewMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 217px;
  height: 400px;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 1px gray;

  p {
    margin: 0;
    margin-top: 10px;
    font-size: 15px;
  }
`;

export const CrewMemberImg = styled.img`
  width: 100%;
  height: 80%;
  align-self: center;
  border-radius: 10px;
`;

export const RecommendedList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 75%;
  max-width: 1500px;
  margin-bottom: 100px;

  @media (max-width: 650px) {
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-height: 500px) {
    flex-wrap: wrap;
    gap: 20px;
    width: 85%;
  }
`;

export const Precommended = styled.p`
  font-size: 28px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 150px;
  height: 300px;
  margin-right: 20px;

  p {
    font-size: 12px;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 8px #f2f2f2;
  margin-bottom: 10px;
`;

export const Ptitle = styled.p`
  font-size: 20px;
  height: 10%;
  margin: 0;

  :hover {
    cursor: pointer;
  }
`;

export const Pdate = styled.p`
  font-size: 20px;
  height: 10%;
  margin: 0;
  color: #646464;
`;

export const Ptrailer = styled.p`
  font-size: 28px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
