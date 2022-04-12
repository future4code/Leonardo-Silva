import GlobalStyle from "./constants/globalStyle";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/coordinator";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
