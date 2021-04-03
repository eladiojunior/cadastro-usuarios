import './Logo.css';
import logo from '../../assets/imgs/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={logo} alt="logo"/>
            </Link>
            <h1 className="d-none d-sm-block">Cadastro de Usuário</h1>
        </aside>
    );
}
export default Logo;    