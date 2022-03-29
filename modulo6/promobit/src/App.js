import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import GlobalStyle from "./Constants/GlobalStyle";
import GlobalState from "./Context/GlobalState";

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalState>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
