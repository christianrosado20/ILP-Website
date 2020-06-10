import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

const Footer = () => {
    return (
        <div className="Footer__navbar">
            <Link>Empleos</Link>
            <Link>Alianzas</Link>
            <Link>Acreditaciones</Link>
            <Link>Derecho a Saber</Link>
            <Link>Políticas</Link>
            <Link>Privacidad</Link>
            <Link>Emergencias</Link>
        </div>
    )
}

export default Footer;