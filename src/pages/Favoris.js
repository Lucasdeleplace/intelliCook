import React from "react";
import Header from "../components/Header";

const Favoris = () => {
    const handleClick = () => {
        window.history.back();
    }
    return (
        <div>
            <Header />
            <h1>Mes favoris ★</h1>
            <p onClick={handleClick}>🔙</p>
        </div>
    )
}

export default Favoris;