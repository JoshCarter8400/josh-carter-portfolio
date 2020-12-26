import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [nav] = useState(["About", "Portfolio", "Resume", "Contact"]);
  const [navSelected, setNavSelected] = useState(nav[0]);
  return (
    <div>
      <Nav
        nav={nav}
        setNavSelected={setNavSelected}
        navSelected={navSelected}
      ></Nav>
      <Footer />
      <main>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
