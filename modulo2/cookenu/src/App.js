import {React, useState} from 'react'
import Router from './routes/Router'
import theme from './constants/Theme';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
  const token = localStorage.getItem("token")
    const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header rightButton={rightButton} setRightButton={setRightButton}/>
      <Router rightButton={rightButton} setRightButton={setRightButton}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
