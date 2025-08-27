import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import WhatsappButton from "./components/WhatsappButton";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Contact /></section>
      <WhatsappButton />
    </>
  );
}

export default App;
