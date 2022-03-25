import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#4caf50',
      },
      secondary: {
        main: '#ffeb3b',
      },
      terciary: {
        main: '#f44336',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

function CircularProgressWithLabel(props) {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress color={props.colorrating} variant="determinate" {...props}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  </ThemeProvider>
    
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({percentage}) {
  const [progress, setProgress] = React.useState(10);
  let colorrating = ""
  if(percentage >= 7.5){
      colorrating = "primary"
  } else if(percentage < 7.5 && percentage > 5){
      colorrating = "secondary"
  } else {
      colorrating = "terciary"
  }
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (percentage * 10));
    }, 0);
    return () => {
      clearInterval(timer);
    };
  }, [percentage]);

  return <CircularProgressWithLabel value={progress} colorrating={colorrating}/>;
}