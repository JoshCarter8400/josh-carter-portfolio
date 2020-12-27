import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [nav] = useState(["About", "Portfolio", "Resume", "Contact"]);

  const [currentNav, setCurrentNav] = useState(nav[0]);
  return (
    <div>
      <Nav
        nav={nav}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
        setContactSelected={setContactSelected}
        contactSelected={contactSelected}
      ></Nav>
      <Footer />
      <main>
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
