
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // se manda a llamar al archivo .css para que proporcione los estilos creados para index
import './bootstrap.min.css'
import App from './App'; //se importa la funcion app creada en app.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
