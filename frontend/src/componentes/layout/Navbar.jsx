import './Navbar.css';
import React from 'react';
import NavbarItem from './NavbarItem';
const Navbar = () => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <NavbarItem icone="home" rotulo="Início" link="/" ajuda="Retornar ao início da aplicação."/>
                <NavbarItem icone="users" rotulo="Usuários" link="/usuarios" ajuda="Listar os usuários registrados na aplicação."/>
            </nav>
        </aside>
    );
}
export default Navbar;

