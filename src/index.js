import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import './styles/animations.css'; // Importando as animações globais
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
