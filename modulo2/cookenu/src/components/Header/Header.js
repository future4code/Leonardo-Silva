import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { goToRecipesList } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../../routes/Coordinator';

const Header = ({rightButton, setRightButton}) => {
    let navigate = useNavigate()
    const token = localStorage.getItem("token")
    
    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
      if (token) {
        logout()
        setRightButton("Login")
        goToLogin(navigate)
      } else {
        goToLogin(navigate)
      }
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {token ? <Button color="inherit" onClick={() => goToRecipesList(navigate)}>Cookenu</Button> : <Button color="inherit">Cookenu</Button>}
          </Typography>
          <Button color="inherit" onClick={rightButtonAction}>{rightButton}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header