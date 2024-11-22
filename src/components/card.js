import React from "react";
import imgdejeuner from "../assets/imgdejeuner.png"
import imgplat from "../assets/imgplat.png"
import imgsalade from "../assets/imgsalade.png"
import imgapero from "../assets/imgapero.jpg"
import imgrigolo from "../assets/imgrigolo.png"
import imgdesert from "../assets/imgdesert.png"
const cards = [
  { id: 1, title: "Petits déjeuners", img:  (imgdejeuner)},
  { id: 2, title: "Plats principaux", img:(imgplat)},
  { id: 3, title: "Salades", img: (imgsalade)},
  { id: 4, title: "Apéritifs", img:(imgapero) },
  { id: 5, title: "Plats rigolos", img: (imgrigolo)},
  { id: 6, title: "Dessert", img: (imgdesert)},
];

const Cards = () => {
    return (
        <div className="cards-container">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.img} alt={card.title} className="card-image" />
              <p className="card-title">{card.title}</p>
            </div>
          ))}
        </div>
      );
    };
    
    export default Cards; 