import React, { useState } from "react";
import GlobalContextState from "./GlobalContextState";

const GlobalState = (props) => {
  const [filter, setFilter] = useState(
    JSON.parse(localStorage.getItem("filter"))
  );
  const [pagina, setPagina] = useState(1);

  if (!filter) {
    localStorage.setItem("filter", JSON.stringify([]));
    setFilter(JSON.parse(localStorage.getItem("filter")));
  }

  return (
    <GlobalContextState.Provider
      value={{ filter, setFilter, pagina, setPagina }}
    >
      {props.children}
    </GlobalContextState.Provider>
  );
};

export default GlobalState;
