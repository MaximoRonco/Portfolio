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
          Hola, soy <strong>Máximo Ronco</strong>, de Córdoba, Argentina. Estudio <strong>Ingeniería en Sistemas</strong> y me estoy formando como <strong>Desarrollador Web</strong> y <strong>Tester QA Automation</strong>. Me encanta combinar el diseño y la funcionalidad para crear páginas que sean claras, útiles y atractivas.
          Además, disfruto mucho de <strong>aprender nuevas tecnologías</strong> y mantenerme en <strong>constante crecimiento</strong>, siempre buscando formas de mejorar lo que hago y de aportar soluciones innovadoras.
          Actualmente, junto a unos compañeros, desarrollamos <strong><a href="https://www.instagram.com/codeandoweb/" target="_blank" rel="noopener noreferrer">Codeando Web</a></strong>, un proyecto personal en el que brindamos <strong>soluciones web</strong> a personas y emprendimientos,
        </p>
        <div className="about-btns">
          <a href="/CV_MaximoRonco.pdf" download>
            <button className="cv-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: '-3px', marginRight: 6}}>
                <path d="M5 20h14a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1zm7-3a1 1 0 0 1-1-1V5.83l-3.59 3.58a1 1 0 1 1-1.42-1.42l5.3-5.29a1 1 0 0 1 1.42 0l5.3 5.29a1 1 0 1 1-1.42 1.42L13 5.83V16a1 1 0 0 1-1 1z"/>
              </svg>
              Descargar CV</button>
          </a>
          <a href="https://www.linkedin.com/in/m%C3%A1ximo-ronco/" target="_blank" rel="noopener noreferrer">
            <button className="cv-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: '-3px', marginRight: 6}}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
              LinkedIn
            </button>
          </a>
          <a href="https://github.com/MaximoRonco" target="_blank" rel="noopener noreferrer">
            <button className="cv-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: '-3px', marginRight: 6}}>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
