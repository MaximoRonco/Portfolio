import React, { useRef, useEffect } from "react";
import "../assets/arre.png"
import "../assets/mcl.png"
import "../assets/cardelli.png"
import "../assets/sequelize.png"
import "./Projects.css";

const proyectos = [
  {
    titulo: "ARRE",
    descripcion: "Web para restaurante con carta dinámica, buscador y panel administrativo para gestionar categorías, subcategorías y productos.",
    imagen: require("../assets/arre.png"),
    tecnologias: [
      { nombre: "JavaScript", logo: require("../assets/js-log.webp") },
      { nombre: "HTML 5", logo: require("../assets/HTML5_logo.png") },
      { nombre: "CSS", logo: require("../assets/css-logo.png") },
      { nombre: "NodeJs", logo: require("../assets/node.png") },
      { nombre: "MySQL", logo: require("../assets/mysql.png") },
      { nombre: "Sequelize", logo: require("../assets/sequelize.png") }
    ],
    link:"https://arremiami.vercel.app/"
  },
  {
    titulo: "Cardelli Neumáticos",
    descripcion: "E-commerce de neumáticos con catálogo por medidas, carrito de compras y gestión de productos con múltiples imágenes.",
    imagen: require("../assets/cardelli.png"),
    tecnologias: [
      { nombre: "JavaScript", logo: require("../assets/js-log.webp") },
      { nombre: "HTML 5", logo: require("../assets/HTML5_logo.png") },
      { nombre: "CSS", logo: require("../assets/css-logo.png") },
      { nombre: "NodeJs", logo: require("../assets/node.png") },
      { nombre: "MySQL", logo: require("../assets/mysql.png") },
      { nombre: "Sequelize", logo: require("../assets/sequelize.png") }
    ],
    link:"https://cardelli-neumaticos.vercel.app/"
  },
  {
    titulo: "MCL Automotores",
    descripcion: "Web para concesionaria con catálogo de vehículos, buscador y panel administrativo para gestionar categorías, subcategorías y productos.",
    imagen: require("../assets/mcl.png"),
    tecnologias: [
      { nombre: "JavaScript", logo: require("../assets/js-log.webp") },
      { nombre: "HTML 5", logo: require("../assets/HTML5_logo.png") },
      { nombre: "CSS", logo: require("../assets/css-logo.png") },
      { nombre: "NodeJs", logo: require("../assets/node.png") },
      { nombre: "MySQL", logo: require("../assets/mysql.png") },
      { nombre: "Sequelize", logo: require("../assets/sequelize.png") }
    ],
    link:"https://mcl-automotores.vercel.app/"
  }

];

function useRevealOnScroll() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return refs;
}

export default function Projects() {
  const cardRefs = useRevealOnScroll();
  return (
    <div className="projects-container">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((p, i) => (
          <div
            key={i}
            className="project-card"
            ref={el => (cardRefs.current[i] = el)}
            onClick={() => window.open(p.link, "_blank")}
          >
            <img src={p.imagen} alt={p.titulo} className="project-img" />
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <div className="tech-list">
              <strong>Tecnologías:</strong>
              <div className="tech-logos">
                {p.tecnologias.map((tech, idx) => (
                  <div key={idx} className="tech-item">
                    <img src={tech.logo} alt={tech.nombre} className="tech-logo" />
                    <span>{tech.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}