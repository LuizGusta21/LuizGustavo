import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import whats from "../src/assets/whatsapp.png";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Projects from "./pages/Projetos/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div className="whatsapp">
        <a href="https://wa.me/5577988522951" target="_blank">
          <img src={whats} alt="Entre em contato no meu whatsapp" />
        </a>
      </div>
    </>
  );
}

export default App;
