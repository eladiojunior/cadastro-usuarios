import './Header.css';
import React from 'react';
const Header = (props) => {
    return (
        <header className="header">
            <h1 className="mt-1 mb-0">
                <i className={`fa fa-${props.icone}`}></i> {props.titulo}
            </h1>
            <p className="lead text-muted">{props.subtitulo}</p>
        </header>
    );
}
export default Header;