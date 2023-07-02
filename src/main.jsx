import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#7900f5',
    },
    background: {
      default: '#ffffff',
    },
    error: {
      main: '#b71c1c',
    },
    cart: {
      main: '#8E10FE',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline/>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
