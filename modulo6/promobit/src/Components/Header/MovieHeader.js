import React from "react";
import { Main, Head, DivLogo, MovieInfo, PosterImg, MovieDescription, TitleMovie, MovieSinopse, Crew, CrewRow, PercentRow, ButtonHome, PsinopseInfo, DivSinopse} from './styled'
import { urlBaseImgs } from "../../Constants/UrlBase";
import CircularStatic from "../Rating/Rating";
import { goToHome } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import CircularColor from "../Loading/Loading";

const MovieHeader = ({ dataMovie, dataCrew }) => {
  const navigate = useNavigate();

  const directorSearch = () => {
    for (let person of dataCrew.crew) {
      if (person.job === "Director") {
        return person.name;
      }
    }
  };

  const crewSearchName = (x) => {
    if (dataCrew.crew.length < 5) {
      return dataCrew.crew[dataCrew.crew.length - 1].name;
    } else if (dataCrew.crew[x].job !== "Director") {
      return dataCrew.crew[x].name;
    } else {
      return dataCrew.crew[dataCrew.crew.length - 1].name;
    }
  };

  const crewSearchJob = (x) => {
    if (dataCrew.crew.length < 5) {
      return dataCrew.crew[dataCrew.crew.length - 1].job;
    } else if (dataCrew.crew[x].job !== "Director") {
      return dataCrew.crew[x].job;
    } else {
      return dataCrew.crew[dataCrew.crew.length - 1].job;
    }
  };

  const sinopseVerify = () => {
    if(dataMovie.overview){
      return dataMovie.overview
    } else {
      return ` *** Sinopse Indisponível ***`
    }
  };

  // const crewVerify = () => {
  //   if(dataCrew.crew.length < 5){
  //     for(let person of dataCrew.crew){
  //       return(<Crew>
  //           <p>
  //             <b>{crewSearchName(0)}</b>
  //           </p>
  //           <p>{crewSearchJob(0)}</p>
  //         </Crew>)
  //     }
  //   } else {
  //     let num = 0
  //     while(num < 4){
  //       num = num + 1
  //       return(<Crew>
  //         <p>
  //           <b>{crewSearchName(0)}</b>
  //         </p>
  //         <p>{crewSearchJob(0)}</p>
  //       </Crew>)
  //     }
  //   }
  // }

  const genreSearch = () => {
    let allGenres = "";
    for (let genre of dataMovie.genres) {
      allGenres = allGenres + `${genre.name}, `;
    }

    let finalGenres = allGenres.substr(0, allGenres.length - 2);
    return finalGenres;
  };

  const runtimeFix = () => {
    let runtime = dataMovie.runtime;
    let hours = 0;
    while (runtime > 60) {
      runtime = runtime - 60;
      hours += 1;
    }

    let finalRuntime = `${hours}h ${runtime}m`;
    return finalRuntime;
  };

  const dateFix = () => {
    let release_date = dataMovie.release_date;
    let newDate = release_date.split("-").reverse().join("/");

    return newDate;
  };

  return (
    <Main>
      <Head>
        <ButtonHome onClick={() => goToHome(navigate)}>
          <b>
            <p>T M D B</p>
          </b>
          <DivLogo />
        </ButtonHome>
      </Head>
      <MovieInfo>
      {dataMovie && dataCrew ? (
        <MovieInfo>
        <PosterImg src={`${urlBaseImgs}/w500/${dataMovie.poster_path}`} />
          <MovieDescription>
            <div>
            <TitleMovie>{dataMovie.title}</TitleMovie>
            <p>
              • {dateFix()} (BR) • {genreSearch()} • {runtimeFix()}
            </p>
            <PercentRow>
              <CircularStatic percentage={dataMovie.vote_average} />
              <p>Avaliação dos usuários</p>
            </PercentRow>
            </div>
            <DivSinopse>
              <MovieSinopse>Sinopse</MovieSinopse>
              <PsinopseInfo>{sinopseVerify()}</PsinopseInfo>
            </DivSinopse>
            <CrewRow>
              <Crew>
                <p>
                  <b>{directorSearch()}</b>
                </p>
                <p>Director</p>
              </Crew>
              <Crew>
                <p>
                  <b>{crewSearchName(0)}</b>
                </p>
                <p>{crewSearchJob(0)}</p>
              </Crew>
              <Crew>
                <p>
                  <b>{crewSearchName(1)}</b>
                </p>
                <p>{crewSearchJob(1)}</p>
              </Crew>
              <Crew>
                <p>
                  <b>{crewSearchName(2)}</b>
                </p>
                <p>{crewSearchJob(2)}</p>
              </Crew>
              <Crew>
                <p>
                  <b>{crewSearchName(3)}</b>
                </p>
                <p>{crewSearchJob(3)}</p>
              </Crew>
            </CrewRow>
          </MovieDescription>
          </MovieInfo>
      ) : (
        CircularColor()
      )}
      </MovieInfo>
    </Main>
  );
};

export default MovieHeader