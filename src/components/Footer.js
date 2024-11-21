import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>intelliCooooooook</h2>
        <p>Cuisinez avec nous, on est sympas !</p>
        <div>
          {["Instagram", "Facebook", "YouTube"].map((platform) => (
            <img
              key={platform}
              src={`https://cdn-icons-png.flaticon.com/512/${platform === "Instagram" ? "2111/2111463" : platform === "Facebook" ? "733/733547" : "1384/1384060"}.png`}
              alt={platform}
              
            />
        ))}
        </div>
      </div>

        <div>
          <h3>A propos de nous</h3>
          <p>Qui sommes-nous ?</p>
          <p>Contactez-nous !</p>
        </div>
        <div>
          <h3>Informations légales</h3>
          <p>Conditions légales</p>
          <p>Mentions légales</p>
        </div>
      <div>
        <p>2024 © intelliCooooooook</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Haut de la page !
        </button>
      </div>
    </footer>
  );
};




export default Footer;