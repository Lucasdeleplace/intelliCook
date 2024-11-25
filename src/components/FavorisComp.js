import React from "react";
import { Link } from "react-router-dom";
import '../styles/FavorisComp.css';
import { FavoritesContext } from "./FavoritesContext"; //je veux ça 

const FavorisComp = () => { 
    return (
        <div className="favoris">
            <Link to="/favoris" className="favoriteStar">★</Link>
            <Link to="/favoris" className="favoriteText">Favoris</Link>
        </div>
    )
}

export default FavorisComp;