import React from "react";
const cards = [
  { id: 1, title: "Petits déjeuners", img: "/images/petits-dejeuners.jpg" },
  { id: 2, title: "Plats principaux", img: "/images/plats-principaux.jpg" },
  { id: 3, title: "Salades", img: "/images/salades.jpg" },
  { id: 4, title: "Apéritifs", img: "/images/aperitifs.jpg" },
  { id: 5, title: "Plats rigolos", img: "/images/plats-rigolos.jpg" },
  { id: 6, title: "Desserts", img: "/images/desserts.jpg" },
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