import React from "react";
import Search from "./Search"
import '../styles/Header.css';
import FavorisComp from "./FavorisComp";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header>
            <div>
                <div className="mysteryRecipe">
                    <p className="mysteryRecipe">✨🕵️‍♀️ Découvrez la recette mystère du jour ! 🕵️‍♂️✨</p>
                </div>
                <div className="headerTitle">
                    <h1 className="headerLogo">IntelliCooooooook</h1>
                    <Search />
                    <FavorisComp />
                </div>
                <div className="headerMenu">
                    <NavBar />
                </div>
            </div>
        </header>
    )
}

export default Header;