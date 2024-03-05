import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import 'react-toastify/dist/ReactToastify.css';

import App from './App.tsx';
import './index.css';
import { baseTheme } from '@theme/index.ts';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { store } from '@store/root.store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.Fragment>
        <Provider store={store}>
            <ThemeProvider theme={baseTheme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </React.Fragment>,
);
