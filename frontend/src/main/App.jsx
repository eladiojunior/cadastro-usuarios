import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Logo from '../componentes/layout/Logo';
import Navbar from '../componentes/layout/Navbar';
import Footer from '../componentes/layout/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo/>
                <Navbar/>
                <Routes/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
export default App;    