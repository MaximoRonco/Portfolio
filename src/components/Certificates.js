import React, { useRef, useEffect } from "react";
import "./Certificates.css";

const Certificates = [
    {
        title: "Certificado en Desarrollo Web",
        issuer: "Udemy",
        date: "Enero 2023",
        image: require("../assets/perfil.jpg")
    },
    {
        title: "UX/UI",
        issuer: "Coderhouse",
        date: "Noviembre 2024",
        image: require("../assets/perfil.jpg")
    },
    {
        title: "UX/UI",
        issuer: "Coderhouse",
        date: "Noviembre 2024",
        image: require("../assets/perfil.jpg")
    },
    {
        title: "UX/UI",
        issuer: "Coderhouse",
        date: "Noviembre 2024",
        image: require("../assets/perfil.jpg")
    },
    {
        title: "UX/UI",
        issuer: "Coderhouse",
        date: "Noviembre 2024",
        image: require("../assets/perfil.jpg")
    },
    
]

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

export default function Certificate() {
  const cardRefs = useRevealOnScroll();
  return (
    <div className="certificates-container">
      <h2>Certificados</h2>
      <div className="certificates-grid">
        {Certificates.map((cert, index) => (
          <div
            className="certificate-card"
            key={index}
            ref={el => (cardRefs.current[index] = el)}
          >
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <div className="certificate-info">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}