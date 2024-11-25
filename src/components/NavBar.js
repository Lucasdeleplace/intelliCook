import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <ul className="navListAll">
                <li><Link to="/" className="navListNoel">🌟Noel🎄</Link></li>
                <li><Link to="/" className="navList">Types de plats</Link></li>
                <li><Link to="/" className="navList">Collation</Link></li>
                <li><Link to="/" className="navList">Apéros</Link></li>
                <li><Link to="/" className="navList">Anti gaspi</Link></li>
                <li><Link to="/" className="navList">Recette aléatoire</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;