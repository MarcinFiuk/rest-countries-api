import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './components/styles/Global';
import { Reset } from './components/styles/Reset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Reset />
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
