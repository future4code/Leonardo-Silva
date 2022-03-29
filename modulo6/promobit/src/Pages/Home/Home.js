import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { api_Key, urlBaseImgs } from "../../Constants/UrlBase";
import { Main, Pag, MovieList, Movie, MovieImg, Ptitle, Pdate } from "./styled";
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Context/GlobalContextState";
import { FixDate } from "../../Services/FixDate";
import Paginacao from "../../Components/Paginacao/Paginacao";
import { goToMovieDetail } from "../../Routes/Coordinator";
import CircularColor from "../../Components/Loading/Loading";

const Home = () => {
  const { filter, pagina } = useContext(GlobalStateContext);
  const [data, error, isLoading] = useRequestData(
    `/movie/popular?api_key=${api_Key}&language=pt-BR&page=${pagina}`
  );
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = () => {
    setMovies(data);
  };

  const getList = () => {
    const list =
      data &&
      movies &&
      movies.map((movie) => {
        if (filter[0]) {
          const date = FixDate(movie.release_date);
          for (let id of filter) {
            for (let genre_id of movie.genre_ids) {
              if (id === genre_id) {
                return (
                  <Movie key={movie.id}>
                    <MovieImg
                      src={`${urlBaseImgs}/w500/${movie.poster_path}`}
                      alt="imagem"
                    />
                    <Ptitle onClick={() => goToMovieDetail(navigate, movie.id)}>
                      <b>{movie.title}</b>
                    </Ptitle>
                    <Pdate>
                      <b>{date}</b>
                    </Pdate>
                  </Movie>
                );
              }
            }
          }
        } else {
          const date = FixDate(movie.release_date);
          return (
            <Movie key={movie.id}>
              <MovieImg
                src={`${urlBaseImgs}/w500/${movie.poster_path}`}
                onClick={() => goToMovieDetail(navigate, movie.id)}
              />
              <Ptitle onClick={() => goToMovieDetail(navigate, movie.id)}>
                <b>{movie.title}</b>
              </Ptitle>
              <Pdate>
                <b>{date}</b>
              </Pdate>
            </Movie>
          );
        }
      });

    return list;
  };

  useEffect(() => {
    getMovies();
    getList();
    window.scrollTo(0, 0);
  }, [filter, data]);

  if (error) {
    console.log(error);
  }

  return (
    <Main>
      <Header />
      {isLoading ? CircularColor() : <MovieList> {getList()} </MovieList>}
      <Pag>
        <Paginacao />
      </Pag>
    </Main>
  );
};

export default Home;
