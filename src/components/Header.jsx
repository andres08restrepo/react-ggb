import React, {useState} from 'react';
import '../styles/components/header.scss';

const Header = () => {

    const [hamburger, setHamburger]= useState("");

    let toggleHamburger = () => {
        if (hamburger == ""){
            setHamburger ("is-active");
        } else{
            setHamburger("");
        }
    }

    return(
        <header>
            <button onClick={ toggleHamburger } className={`hamburger hamburger--collapse ${hamburger}`} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <img src="" alt="Logo GreenGardenBARF"/>
            <p>Whatsapp</p>
            <nav className="menu">
                <ul>
                    <li>HOME</li>
                    <li>DIETA BARF</li>
                    <li>CALCULA RACION</li>
                    <li>PRODUCTOS</li>
                    <li>
                        <ul>
                            <li>BARF</li>
                            <li>SNACKS</li>
                            <li>CUMPLEAÑOS</li>
                            <li>COMBOS</li>
                        </ul>
                    </li>
                    <li>NOSOTROS</li>
                    <li>FAMILIA GGB</li>
                </ul>
                <ul>
                    <li>instagram</li>
                    <li>Facebook</li>
                    <li>Whatsapp</li>
                </ul>
                <ul>
                    <li>PREGUNTAS FRECUENTES</li>
                    <li>CONTACTO</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;