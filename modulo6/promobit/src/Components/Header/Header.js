import React, { useContext } from "react";
import {
  Main,
  Head,
  Categories,
  Filter,
  Option,
  OptionChosed,
  DivLogo,
  Title,
  ButtonHome,
} from "./styled";
import useRequestData from "../../Hooks/useRequestData";
import { api_Key } from "../../Constants/UrlBase";
import { addFilter } from "../../Services/AddFilter";
import { removeFilter } from "../../Services/RemoveFilter";
import GlobalStateContext from "../../Context/GlobalContextState";
import { FiXCircle } from "react-icons/fi";

const Header = () => {
  const [genres] = useRequestData(
    `/genre/movie/list?api_key=${api_Key}&language=pt-BR`
  );
  const { filter, setFilter } = useContext(GlobalStateContext);

  const categoryFilter =
    genres &&
    genres.map((category) => {
      let idExists = filter.find((p) => p === category.id);
      if (idExists) {
        return (
          <OptionChosed
            key={category.id}
            onClick={() => removeFilter(filter, setFilter, category.id)}
          >
            <Title>{category.name}</Title>
            <FiXCircle />
          </OptionChosed>
        );
      } else {
        return (
          <Option
            key={category.id}
            onClick={() => addFilter(setFilter, category.id)}
          >
            <b>{category.name}</b>
          </Option>
        );
      }
    });

  return (
    <Main>
      <Head>
        <ButtonHome>
          <b>
            <p>T M D B</p>
          </b>
          <DivLogo />
        </ButtonHome>
      </Head>
      <Categories>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <p>Filtre por:</p>
        <Filter>{categoryFilter}</Filter>
      </Categories>
    </Main>
  );
};

export default Header;
