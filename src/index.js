import React from 'react';
import ReactDOM from 'react-dom/client';
import{Alejandra} from './Componente/Alejandra.js';
import{Menu} from './Componente/menu/Menu.js';
import { Banner } from './Banner/Banner.js';
import{Sinopsis} from './sinopsis/Sinopsis.js'
import { Footer } from './Footer/Footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Menu/>
    <Banner/>
    <Sinopsis/>
    <Footer/>
  </React.StrictMode>
);


