// Make sure to run: npm install @formspree/react
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjkevyqn");

  if (state.succeeded) {
    return <p className="contact-success">¡Gracias por tu mensaje!</p>;
  }

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Correo"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Mensaje"
          rows="5"
          required
        />
        <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
}