import React from "react";
import Search from "./Search"
import '../styles/Header_new.css';
import FavorisComp from "./FavorisComp";
import NavBar from "./NavBar";
import lune from '../assets/lune.png';
import soleil from '../assets/soleil2.png';

const Header = () => {
    const [luna, setLuna] = React.useState(soleil);
    const handleClick = () => {
        if (luna === soleil) {
            setLuna(lune);
            document.querySelector(".DarkMode").classList.add("lune");
            document.querySelector(".DarkMode").classList.remove("soleil");
        } else {
            setLuna(soleil);
            document.querySelector(".DarkMode").classList.add("soleil");
            document.querySelector(".DarkMode").classList.remove("lune");
        }
    }
    // const handleClick = () => {
    //     if (luna === "☀️") {
    //       setLuna("🌙");
    //       document.querySelector(".DarkMode").classList.add("lune");
    //       document.querySelector(".DarkMode").classList.remove("soleil");
    //     } else {
    //       setLuna("☀️");
    //       document.querySelector(".DarkMode").classList.add("soleil");
    //       document.querySelector(".DarkMode").classList.remove("lune");
    //     }
    //   };

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
                    <img src = {luna} className="DarkMode" onClick={handleClick}/>
                </div>
                <div className="headerMenu">
                    
                    <NavBar />
                </div>
            </div>
        </header>
    )
}

export default Header;