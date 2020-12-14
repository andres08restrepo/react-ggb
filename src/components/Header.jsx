import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.scss';
import logo from '../../public/images/logo.svg';

const Header = () => {

    const [hamburger, setHamburger]= useState("");
    const [menu, setMenu]= useState("");

    let toggleHamburger = () => {
        if (hamburger == ""){
            setHamburger ("is-active");
            setMenu ("menu-desplegado");
        } else{
            setHamburger("");
            setMenu("");
        }
    }

    return(
        <header>
            <div className="header-container">
                <button onClick={ toggleHamburger } className={`hamburger hamburger--collapse ${hamburger}`} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <Link to="/"><img src={logo} alt="Logo GreenGardenBARF"/></Link>
                <i className="fab fa-whatsapp-square" />
            </div>
            <nav className={`menu ${menu}`}>
                 <ul>
                    <li><Link to="/dieta-barf" onClick={ toggleHamburger }>DIETA BARF</Link></li>
                    <li><Link to="/calcula-racion" onClick={ toggleHamburger }>CALCULA RACION</Link></li>
                    <li><Link to="/productos" onClick={ toggleHamburger }>PRODUCTOS</Link></li>
                         <ul>
                            <li><Link to="/productos/barf" onClick={ toggleHamburger }>BARF</Link></li>
                            <li><Link to="/productos/snacks" onClick={ toggleHamburger }>SNACKS</Link></li>
                            <li><Link to="/productos/cumpleaños" onClick={ toggleHamburger }>CUMPLEAÑOS</Link></li>
                            <li><Link to="/productos/combos" onClick={ toggleHamburger }>COMBOS</Link></li>
                        </ul>
                    <li><Link to="/nosotros" onClick={ toggleHamburger }>NOSOTROS</Link></li>
                    <li><Link to="/familia-ggb" onClick={ toggleHamburger }>FAMILIA GGB</Link></li>
                </ul>
                <ul>
                    <li>instagram</li>
                    <li>Facebook</li>
                    <li>Whatsapp</li>
                </ul>
                <ul>
                    <li><Link to="/preguntas-frecuentes" onClick={ toggleHamburger }>PREGUNTAS FRECUENTES</Link></li>
                    <li><Link to="/contacto" onClick={ toggleHamburger }>CONTACTO</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;