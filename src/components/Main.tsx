import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../assets/index.css'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { AppContext, AppStore } from '../core/AppStore.ts';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from '../translations/en.json'
import * as de from '../translations/de.json'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffeb3b',
      contrastText: '#fff',
    },
    background: {
      paper: '#00000050'
    },
    text: {
      primary: '#fff'
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          padding: '2px 8px',
          marginBottom: 8
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'white',
          padding: 0,
          minHeight: '48px',
        }
      }
    }
  },
  typography: {
    fontFamily: '"Segoe UI"',
    allVariants: {
      color: '#fff'
    }
  },
});

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
]);

i18n.use(initReactI18next).init({
  lng: localStorage.getItem('language') ?? "en",
  fallbackLng: "en",
  resources: { en, de },
  interpolation: { escapeValue: false }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <React.StrictMode>
      <AppContext.Provider value={AppStore.getInstance()}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </React.StrictMode>
  </ThemeProvider>
)
