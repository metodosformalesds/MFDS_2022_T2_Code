import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MapsApp } from './MapsApp';

if (!navigator.geolocation){
  alert('Tu navegador no tiene opción de Geolocalización');
  throw new Error('Tu navegador no tiene opción de Geolocalización')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);


