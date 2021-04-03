import './NavbarItem.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = (props) => {
    return (
        <Link to={props.link} title={props.ajuda}>
            <i className={`fa fa-${props.icone}`}></i> {props.rotulo}
        </Link>
    );
}
export default NavbarItem;

