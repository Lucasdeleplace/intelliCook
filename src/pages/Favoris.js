import React from "react";
import Header from "../components/Header";
import "../styles/Favoris.css";

const Favoris = () => {
    const handleClick = () => {
        window.history.back();
    }
    return (
        <div>
            <Header />
            <div className="favoris">
                <h1>Mes favoris ★</h1>
                <p onClick={handleClick} className="arrowBack">🔙</p>
            </div>
        </div>
    )
}

export default Favoris; 
