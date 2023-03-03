import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import "antd/dist/antd.min.css"

import App from '@/App';
import "assets/css/index.less"
import "normalize.css"
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Suspense fallback="loading">
                    <App />
                </Suspense >
            </ThemeProvider>
        </Provider>
    </HashRouter>
);

