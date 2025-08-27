import React from "react";
import "./WhatsappButton.css";

export default function WhatsappButton() {
  // Número en formato internacional sin + ni espacios
  const phone = "5493572503289";
  const message = encodeURIComponent("¡Hola! Vi tu portfolio y me gustaría contactarte.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a href={url} className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
      <svg width="50" height="50" viewBox="0 0 32 32" fill="currentColor" style={{display: 'block'}}>
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.05C13.7 27.633 14.836 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.04 0-2.062-.162-3.03-.48l-.216-.07-4.65 1.22 1.24-4.53-.14-.22C7.08 18.1 6.25 16.6 6.25 15c0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75-4.374 9.75-9.75 9.75zm5.13-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 5.01 4.22.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.75-.72 2-1.41.25-.69.25-1.28.18-1.41-.07-.13-.25-.2-.53-.34z"/>
      </svg>
    </a>
  );
}
