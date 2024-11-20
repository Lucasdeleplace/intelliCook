import React from "react";
import { Link } from "react-router-dom";
import '../styles/FavorisComp.css';

const FavorisComp = () => { 
    return (
        <div>
            <Link to="/favoris" className="favoriteStar">★</Link>
            <Link to="/favoris" className="favoriteText">favorite</Link>
        </div>
    )
}

export default FavorisComp;