import React from "react";
import "../styles/Santa.css";

const Santa = () => {
    return (
        <div className="Santa">
            <div className="Santa-inside">
                <h1 className="Santa-title">Bientot Noël !</h1>
                <p className="Santa-desc">Venez découvrir notre sélection de plats,
                traditionnels ou peu conventionnels</p>
                <button className="Santa-button">Cliquez pour un super réveillon ⭢</button>
            </div>
        </div>
    )
}

export default Santa;