// client/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

// 1. Define your custom MUI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0A1F44' },    // deep navy
    secondary: { main: '#2ECC71' },  // mint green
    background: { default: '#F4F7FA' }, // soft off-white
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h2: { fontWeight: 600 },
    button: { textTransform: 'none' },
  },
});

// 2. Mount the React app using React 18 createRoot API
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

