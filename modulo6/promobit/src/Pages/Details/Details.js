import { React } from 'react'
import MovieHeader from '../../Components/Header/MovieHeader';
import { useParams } from 'react-router-dom';
import useRequestData from "../../Hooks/useRequestData"
import { api_Key } from '../../Constants/UrlBase';
import { Main, Crew, CrewMember, CrewMemberImg, TitleCrew, TitleInfo, RecommendedList, Movie, Ptitle, Pdate, MovieImg} from './styled';
import { urlBaseImgs } from '../../Constants/UrlBase';
import  no_image  from '../../Assets/no_image.png'
import { FixDate } from '../../Services/FixDate';
import { goToMovieDetail } from '../../Routes/Coordinator';
import { useNavigate } from 'react-router-dom';


const Details = () => {
    const params = useParams();
    const [dataMovie] = useRequestData(`/movie/${params.id}?api_key=${api_Key}&language=pt-BR`)    
    const [dataCrew] = useRequestData(`/movie/${params.id}/credits?api_key=${api_Key}&language=pt-BR`)
    const [trailer] = useRequestData(`/movie/${params.id}/videos?api_key=${api_Key}&language=pt-BR`)
    const [recommended] = useRequestData(`/movie/${params.id}/recommendations?api_key=${api_Key}&language=pt-BR&page=1`)
    const navigate = useNavigate()
   
    const crewList = dataCrew && dataCrew.cast.map((person) => {
        let photo = ""
        if(person.profile_path){
            photo = `${urlBaseImgs}/w500/${person.profile_path}`
        } else {
            photo = no_image
        }

        return( <CrewMember key={person.id}>
            <CrewMemberImg src={photo} alt="image"/>
            <p><b>{person.name}</b></p>
            <p>{person.character}</p>
        </CrewMember>)
    })

    const getList = () => {
        let array = []
        if(!recommended[0]){
            return;
        } else {
            for(let i = 0; i < 6; i++){
                const date = FixDate(recommended[i].release_date);
                array.push(
                            <Movie key={recommended[i].id}>
                              <MovieImg src={`${urlBaseImgs}/w500/${recommended[i].poster_path}`} />
                              <Ptitle onClick={() => goToMovieDetail(navigate, recommended[i].id)}>
                                <b>{recommended[i].title}</b>
                              </Ptitle>
                              <Pdate>
                                <b>{date}</b>
                              </Pdate>
                            </Movie>
                        )
            }
        }
        return array
    };

    const getTrailer = () => {
        if(trailer[0]){
            return <iframe width="75%" height="700" src={`https://www.youtube.com/embed/${trailer[0].key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
        } else {
            return <b>Trailer indisponível</b>
        }
    }
        
    return(
        <Main>
            <MovieHeader dataMovie={dataMovie} dataCrew={dataCrew}/> 
            <TitleCrew><b>Elenco Original</b></TitleCrew>
            <Crew>
                {crewList}
            </Crew>  
            <TitleInfo><b>Trailer</b></TitleInfo>
            {trailer ? getTrailer() : <p>loading</p>}
            <TitleInfo><b>Recomendações</b></TitleInfo>
            <RecommendedList>
                {recommended ? getList() : <p>loading</p>}
            </RecommendedList>
        </Main>
    )
}

export default Details