import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="elementsFooter">
      <div className="titre">
        <h2 className="titreLogo">Kitschen</h2>
        <p className="cuisinez">Cuisinez avec nous, on est sympas !</p>
        <div className="logos">
          {["Instagram", "Facebook", "YouTube"].map((platform) => (
            <img
              key={platform} 
              src={`https://cdn-icons-png.flaticon.com/512/${platform === "Instagram" ? "2111/2111463" : platform === "Facebook" ? "733/733547" : "1384/1384060"}.png`}
              alt={platform}
              className={platform}
            />
        ))}
        </div>
      </div>

        <div className="apropos">
          <h3 className="titreApropos">A propos de nous  </h3>
          <p className="pFooter">Qui sommes-nous ?</p>
          <p className="pFooter">Contactez-nous !</p>
        </div>
        <div className="infos">
          <h3 className="titreInfos">Informations légales</h3>
          <p className="pFooter">Conditions légales</p>
          <p className="pFooter">Mentions légales</p>
        </div>
      <div className="boutonHaut">
        
        <button className="boutonHaut"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Haut de la page !
        </button>
        </div>
        </div>
        <div>
        <p className="copyright">------------------------------------------------ <br/><br/> 2024 © Kitschen<br/></p>
      </div>
    </footer>
  );
};




export default Footer;