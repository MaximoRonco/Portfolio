import React from "react";
import perfil from "../assets/perfil.jpg"; 
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <img src={perfil} alt="Máximo Ronco" className="about-img" />
      <div className="about-text">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola! Soy <strong>Máximo Ronco</strong>, desarrollador web 
          apasionado por crear aplicaciones modernas con React y Node.js.
        </p>
        <a href="/cv.pdf" download>
          <button className="cv-btn">📄 Descargar CV</button>
        </a>
      </div>
    </div>
  );
}
