import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2D0C5E',
      },
    },
  });

export default function CircularColor() {
  return (
      <ThemeProvider theme={theme}>
        <Stack sx={{ color: 'grey.500' }} spacing={5} direction="row">
            <CircularProgress color="primary" size={100}/>
        </Stack>
    </ThemeProvider>
  );
}
