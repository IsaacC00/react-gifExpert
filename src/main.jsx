import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //que es el strickMode =  basicamente 
  // StrictMode en React es una herramienta para 
  // detectar problemas potenciales en tu aplicación durante el desarrollo. 
  // Envuelve componentes de React para realizar comprobaciones adicionales 
  // y advertencias sobre prácticas que podrían resultar en problemas futuros.
  //respete las praticas de react y este funcionado de la manera en la que yo espero
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
