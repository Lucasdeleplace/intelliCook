import React from "react";
import { Link } from "react-router-dom";
import '../styles/FavorisComp.css';

const FavorisComp = () => { 
    return (
        <div>
            <Link to="/favoris" className="favoriteStar">★</Link>
        </div>
    )
}

export default FavorisComp;