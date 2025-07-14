// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0A1F44' },
    secondary: { main: '#2ECC71' },
    background: { default: '#F4F7FA' },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h2: { fontWeight: 600 },
    button: { textTransform: 'none' },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);