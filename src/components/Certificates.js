import React, { useRef, useEffect } from "react";
import "../assets/coderhouse_logo.jpeg"
import "../assets/udemy-logo.png"
import "../assets/codearock-log.jpg"
import "./Certificates.css";

const Certificates = [
    {
        title: "Introducción a la Seguridad Informática",
        issuer: "EducaciónIT",
        date: "Marzo 2020",
        image: require("../assets/educacionit.jpg"),
        fullImage: require("../assets/Certificado-Introducción-a-la-Seguridad-Informática-EducaciónIT.png")
    },
    {
        title: "Master en CSS",
        issuer: "Udemy",
        date: "Octubre 2020",
        image: require("../assets/udemy-logo.png"),
        fullImage: require("../assets/css.png")
    },
    {
        title: "JavaScript",
        issuer: "Udemy",
        date: "Septiembre 2020",
        image: require("../assets/udemy-logo.png"),
        fullImage: require("../assets/certificado-js.jpg")
    },
    {
        title: "Bootcamp de desarrollo web",
        issuer: "Codearock",
        date: "Noviembre 2023",
        image: require("../assets/codearock-log.jpg"),
        fullImage: require("../assets/bootcamp.jpg")
    },
    {
        title: "Software Testing",
        issuer: "Udemy",
        date: "Enero 2024",
        image: require("../assets/udemy-logo.png"),
        fullImage: require("../assets/tester.jpg")
    },
    {
        title: "Diseño UX/UI",
        issuer: "Coderhouse",
        date: "Junio 2024",
        image: require("../assets/coderhouse_logo.jpeg"),
        fullImage: require("../assets/certificadoUXUI.png")
    },
    {
        title: "SEO y Posicionamiento web",
        issuer: "Udemy",
        date: "Noviembre 2024",
        image: require("../assets/udemy-logo.png"),
        fullImage: require("../assets/notfound.png")
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
              onClick={() => window.open(cert.fullImage, "_blank")}
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