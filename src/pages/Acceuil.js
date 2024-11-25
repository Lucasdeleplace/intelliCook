import React from "react";
import Header from "../components/Header";
import FavorisComp from "../components/FavorisComp";
import Footer from "../components/Footer";
import Santa from "../components/Santa";


const Acceuil = () => {
    return (
        <div>
            <Header />
            <Footer />
            <FavorisComp />
            <Santa />
        </div>
    )
}

export default Acceuil;