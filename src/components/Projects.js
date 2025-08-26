import React, { useRef, useEffect } from "react";
import "./Projects.css";

const proyectos = [
  {
    titulo: "Portfolio Web",
    descripcion: "Mi propio portfolio para mostrar proyectos y contacto.",
    imagen: require("../assets/perfil.jpg"),
    tecnologias: [
      { nombre: "React", logo: require("../assets/perfil.jpg") },
      { nombre: "Node.js", logo: require("../assets/perfil.jpg") },
      { nombre: "CSS", logo: require("../assets/perfil.jpg") }
    ]
  },
  {
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación para organizar tareas diarias.",
    imagen: require("../assets/perfil.jpg"),
    tecnologias: [
      { nombre: "React", logo: require("../assets/perfil.jpg") },
      { nombre: "Express", logo: require("../assets/perfil.jpg") },
      { nombre: "MongoDB", logo: require("../assets/perfil.jpg") }
    ]
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