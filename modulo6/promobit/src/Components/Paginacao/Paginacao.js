import React, { useContext, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStateContext from "../../Context/GlobalContextState";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D0C5E",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const Paginacao = () => {
  const { pagina, setPagina } = useContext(GlobalStateContext);

  useEffect(() => {}, [pagina]);

  const handleChange = (event, value) => {
    setPagina(value);
    switch (value) {
      case 1:
        setPagina(1);
        break;
      case 2:
        setPagina(2);
        break;
      case 3:
        setPagina(3);
        break;
      case 4:
        setPagina(4);
        break;
      case 5:
        setPagina(5);
        break;
      case 6:
        setPagina(6);
        break;
      case 7:
        setPagina(7);
        break;
      case 8:
        setPagina(8);
        break;
      case 9:
        setPagina(9);
        break;
      case 10:
        setPagina(10);
        break;
      default:
        setPagina(1);
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          count={10}
          page={pagina}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
};

export default Paginacao;
