import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Máximo Ronco</h2>
      <ul className="navbar-links-desktop">
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect y="6" width="32" height="3" rx="1.5" fill="var(--light-blue)"/>
          <rect y="14.5" width="32" height="3" rx="1.5" fill="var(--light-blue)"/>
          <rect y="23" width="32" height="3" rx="1.5" fill="var(--light-blue)"/>
        </svg>
      </button>
      <div className={`side-menu${menuOpen ? " open" : ""}`}> 
        <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="var(--light-blue)" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M6 6L18 18" stroke="var(--light-blue)" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
        <ul>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </div>
      {menuOpen && <div className="side-menu-backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
